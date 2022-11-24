import {
  BranchType,
  CompanyType,
  CustomerType,
  EmployeeType,
  ReviewType,
  UrlType,
} from "../types/index.js";
import {
  Branch,
  Company,
  Customer,
  Employee,
  Review,
  Url,
} from "../models/index.js";
import { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLString } from "graphql";

const models: any = {
  branch: Branch,
  company: Company,
  customer: Customer,
  employee: Employee,
  review: Review,
  url: Url,
};

const types: any = {
  branch: BranchType,
  company: CompanyType,
  customer: CustomerType,
  employee: EmployeeType,
  review: ReviewType,
  url: UrlType,
};

export const Record = (model: string) => ({
  type: types[model],
  args: { id: { type: new GraphQLNonNull(GraphQLID) } },
  async resolve(_: any, args: { id: string }) {
    let res = await models[model].findById(args.id).exec();
    if (res) return res;
    return `Error fetching ${models[model]} from the database.`;
  },
});

export const Records = (model: string) => ({
  type: new GraphQLList(types[model]),
  args: { recordsToGet: { type: new GraphQLNonNull(GraphQLString) } },
  async resolve(_: any, args: any) {
    const errorMessage = `Error fetching ${models[model]}s from the database.`;
    switch (args.recordsToGet) {
      case "active":
        let resActive = await models[model].find({ hidden: false });
        if (resActive) return resActive;
        return errorMessage;
      case "deleted":
        let resDeleted = await models[model].find({ hidden: true });
        if (resDeleted) return resDeleted;
        return errorMessage;
      default:
        let all = await models[model].find({});
        if (all) return all;
        return errorMessage;
    }
  },
});

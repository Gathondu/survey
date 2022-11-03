import {
  BranchType,
  CompanyType,
  CustomerType,
  EmployeeType,
  ReviewType,
} from "./Type/index.js";
import { Branch, Company, Customer, Employee, Review } from "./Model/index.js";
import { GraphQLID, GraphQLList, GraphQLString } from "graphql";

const models: any = {
  branch: Branch,
  company: Company,
  customer: Customer,
  employee: Employee,
  review: Review,
};

const types: any = {
  branch: BranchType,
  company: CompanyType,
  customer: CustomerType,
  employee: EmployeeType,
  review: ReviewType,
};

export const Record = (model: string) => ({
  type: types[model],
  args: { id: { type: GraphQLID } },
  resolve(_: any, args: { id: string }) {
    return models[model].findById(args.id);
  },
});

export const Records = (model: string) => ({
  type: new GraphQLList(types[model]),
  args: { recordsToGet: { type: GraphQLString } },
  resolve(_: any, args: any) {
    switch (args.recordsToGet) {
      case "active":
        return models[model].find({ hidden: false });
      case "deleted":
        return models[model].find({ hidden: true });
      default:
        return models[model].find({});
    }
  },
});

import {
  BranchType,
  CompanyType,
  CustomerType,
  EmployeeType,
  ReviewType,
} from "./Type/index.js";
import { Branch, Company, Customer, Employee, Review } from "./Model/index.js";
import { GraphQLNonNull, GraphQLString } from "graphql";

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

const args: any = {
  company: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    location: { type: new GraphQLNonNull(GraphQLString) },
    website: { type: GraphQLString },
  },
};

export const AddRecord = (model: string) => ({
  type: types[model],
  args: args[model],
  resolve(_: any, args: any) {
    let res = new models[model](args);
    return res.save();
  },
});

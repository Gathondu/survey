import {
  BranchType,
  CompanyType,
  CustomerType,
  EmployeeType,
  ReviewType,
} from "../types/index.js";
import {
  Branch,
  Company,
  Customer,
  Employee,
  Review,
} from "../models/index.js";
import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";

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
  branch: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    location: { type: new GraphQLNonNull(GraphQLString) },
    company: { type: new GraphQLNonNull(GraphQLID) },
  },
  employee: {
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) },
    branch: { type: new GraphQLNonNull(GraphQLID) },
    countryCode: { type: new GraphQLNonNull(GraphQLString) },
    phone: { type: new GraphQLNonNull(GraphQLString) },
    employeeId: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
  },
  customer: {
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) },
    countryCode: { type: new GraphQLNonNull(GraphQLString) },
    phone: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    promotions: { type: new GraphQLNonNull(GraphQLBoolean) },
  },
  review: {
    rating: { type: new GraphQLNonNull(GraphQLInt) },
    comment: { type: new GraphQLNonNull(GraphQLString) },
    employee: { type: new GraphQLNonNull(GraphQLID) },
    customer: { type: new GraphQLNonNull(GraphQLID) },
  },
};

export const AddRecord = (model: string) => ({
  type: types[model],
  args: args[model],
  async resolve(_: any, args: any) {
    return await models[model].create(args);
  },
});

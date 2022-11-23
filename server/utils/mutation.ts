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
    urlId: { type: new GraphQLNonNull(GraphQLString) },
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
  url: {
    urlId: { type: new GraphQLNonNull(GraphQLString) },
    originalUrl: { type: new GraphQLNonNull(GraphQLString) },
  },
};

export const AddRecord = (model: string) => ({
  type: types[model],
  args: args[model],
  async resolve(_: any, args: any) {
    return await models[model].create(args);
  },
});

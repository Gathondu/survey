import { Record, Records } from "./query.js";
import { AddRecord } from "./mutation.js";
import { GraphQLObjectType, GraphQLSchema } from "graphql";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    company: Record("company"),
    companies: Records("company"),
    branch: Record("branch"),
    branches: Records("branch"),
    employee: Record("employee"),
    employees: Records("employee"),
    customer: Record("customer"),
    customers: Records("customer"),
    review: Record("review"),
    reviews: Records("review"),
    url: Record("url"),
    urls: Records("url"),
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addCompany: AddRecord("company"),
    addBranch: AddRecord("branch"),
    addEmployee: AddRecord("employee"),
    addCustomer: AddRecord("customer"),
    addReview: AddRecord("review"),
    addUrl: AddRecord("url"),
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});

export default schema;

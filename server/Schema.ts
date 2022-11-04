import { Record, Records } from "./Query.js";
import { AddRecord } from "./Mutation.js";
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
  },
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});

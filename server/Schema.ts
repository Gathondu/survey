import * as Queries from "./Query/index.js";
import * as Mutations from "./Mutation/index.js";
import { GraphQLObjectType, GraphQLSchema } from "graphql";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    company: Queries.CompanyQuery,
    companies: Queries.CompaniesQuery,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addCompany: Mutations.AddCompany,
  },
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});

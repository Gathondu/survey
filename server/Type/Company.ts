import { GraphQLObjectType, GraphQLString, GraphQLID } from "graphql";

export const Company = new GraphQLObjectType({
  name: "Company",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    location: { type: GraphQLString },
    website: { type: GraphQLString },
    url: { type: GraphQLString },
  }),
});

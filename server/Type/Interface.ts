import { GraphQLInt, GraphQLInterfaceType, GraphQLString } from "graphql";

export const Person = new GraphQLInterfaceType({
  name: "Person",
  fields: () => ({
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    countryCode: { type: GraphQLString },
    phoneNumber: { type: GraphQLInt },
    email: { type: GraphQLString },
    fullName: { type: GraphQLString },
  }),
});

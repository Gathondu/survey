import { GraphQLInterfaceType, GraphQLString } from "graphql";

export const Person = new GraphQLInterfaceType({
  name: "Person",
  fields: () => ({
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    countryCode: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    email: { type: GraphQLString },
    fullName: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

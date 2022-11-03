import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

export const CustomerType = new GraphQLObjectType({
  name: "Customer",
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    email: { type: GraphQLString },
    url: { type: GraphQLString },
    fullName: { type: GraphQLString },
    fullDetails: { type: GraphQLString },
    promotions: { type: GraphQLBoolean },
    hidden: { type: GraphQLBoolean },
  }),
});

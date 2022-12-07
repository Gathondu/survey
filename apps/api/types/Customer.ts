import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { Person } from "../types/index.js";

export const CustomerType = new GraphQLObjectType({
  name: "Customer",
  interfaces: [Person],
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    countryCode: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    email: { type: GraphQLString },
    url: { type: GraphQLString },
    fullName: { type: GraphQLString },
    fullDetails: { type: GraphQLString },
    promotions: { type: GraphQLBoolean },
    hidden: { type: GraphQLBoolean },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

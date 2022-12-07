import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

export const UrlType = new GraphQLObjectType({
  name: "Url",
  fields: (): any => ({
    id: { type: GraphQLID },
    urlId: { type: GraphQLString },
    originalUrl: { type: GraphQLString },
    clicks: { type: GraphQLInt },
    hidden: { type: GraphQLBoolean },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

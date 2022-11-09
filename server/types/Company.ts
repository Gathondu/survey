import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLBoolean,
} from "graphql";
import { Branch } from "../models/index.js";
import { BranchType } from "../types/index.js";

export const CompanyType = new GraphQLObjectType({
  name: "Company",
  fields: (): any => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    location: { type: GraphQLString },
    website: { type: GraphQLString },
    url: { type: GraphQLString },
    hidden: { type: GraphQLBoolean },
    branches: {
      type: new GraphQLList(BranchType),
      resolve(obj: any) {
        return Branch.find({ company: obj.id });
      },
    },
  }),
});

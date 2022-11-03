import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} from "graphql";
import { Branch } from "../Model/Branch.js";
import { BranchType } from "./Branch.js";

export const CompanyType = new GraphQLObjectType({
  name: "Company",
  fields: (): any => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    location: { type: GraphQLString },
    website: { type: GraphQLString },
    url: { type: GraphQLString },
    branches: {
      type: new GraphQLList(BranchType),
      resolve(_: any, obj: any) {
        return Branch.find({ company: obj.id });
      },
    },
  }),
});

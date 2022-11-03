import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
} from "graphql";
import { Branch } from "../Model/Branch.js";
import { BranchType } from "./index.js";

export const EmployeeType = new GraphQLObjectType({
  name: "Employee",
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    employeeId: { type: GraphQLString },
    branch: {
      type: BranchType,
      resolve(_: any, obj: any) {
        return Branch.findById(obj.id);
      },
    },
    url: { type: GraphQLString },
    hidden: { type: GraphQLBoolean },
    fullname: { type: GraphQLString },
    fullId: { type: GraphQLString },
    employer: {
      type: GraphQLString,
      resolve(_: any, obj: any) {
        return `${obj.branch.company.name}: ${obj.branch.name}`;
      },
    },
  }),
});

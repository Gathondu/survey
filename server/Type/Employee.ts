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
      resolve(obj: any) {
        return Branch.findById(obj.branch);
      },
    },
    url: { type: GraphQLString },
    hidden: { type: GraphQLBoolean },
    fullname: { type: GraphQLString },
    fullId: { type: GraphQLString },
    employer: {
      type: GraphQLString,
      resolve(obj: any) {
        return `${obj.branch.company.name}: ${obj.branch.name}`;
      },
    },
  }),
});

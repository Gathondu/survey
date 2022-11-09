import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
} from "graphql";
import { Branch } from "../models/index.js";
import { BranchType, Person } from "../types/index.js";

export const EmployeeType = new GraphQLObjectType({
  name: "Employee",
  interfaces: [Person],
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    employeeId: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    countryCode: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    branch: {
      type: BranchType,
      resolve(obj: any) {
        return Branch.findById(obj.branch);
      },
    },
    url: { type: GraphQLString },
    hidden: { type: GraphQLBoolean },
    fullName: { type: GraphQLString },
    fullId: { type: GraphQLString },
    employer: {
      type: GraphQLString,
      resolve(obj: any) {
        return `${obj.branch.company.name}: ${obj.branch.name}`;
      },
    },
  }),
});

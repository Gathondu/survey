import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
  GraphQLList,
} from "graphql";
import { Company, Employee } from "../Model/index.js";
import { CompanyType, EmployeeType } from "./index.js";

export const BranchType = new GraphQLObjectType({
  name: "Branch",
  fields: (): any => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    location: { type: GraphQLString },
    company: {
      type: CompanyType,
      resolve(_: any, obj: any) {
        return Company.findById(obj.id);
      },
    },
    employees: {
      type: new GraphQLList(EmployeeType),
      resolve(_: any, obj: any) {
        return Employee.find({ branch: obj.id });
      },
    },
    url: { type: GraphQLString },
    hidden: { type: GraphQLBoolean },
  }),
});

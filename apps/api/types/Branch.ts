import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
  GraphQLList,
} from "graphql";
import { Company, Employee } from "../models/index.js";
import { CompanyType, EmployeeType } from "../types/index.js";

export const BranchType = new GraphQLObjectType({
  name: "Branch",
  fields: (): any => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    location: { type: GraphQLString },
    company: {
      type: CompanyType,
      resolve(obj: any) {
        return Company.findById(obj.company);
      },
    },
    employees: {
      type: new GraphQLList(EmployeeType),
      resolve(obj: any) {
        return Employee.find({ branch: obj.id });
      },
    },
    url: { type: GraphQLString },
    urlId: { type: GraphQLString },
    hidden: { type: GraphQLBoolean },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

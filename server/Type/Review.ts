import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { Customer, Employee } from "../Model/index.js";
import { CustomerType, EmployeeType } from "./index.js";

export const ReviewType = new GraphQLObjectType({
  name: "Review",
  fields: (): any => ({
    id: { type: GraphQLID },
    rating: { type: GraphQLInt },
    comment: { type: GraphQLString },
    employee: {
      type: EmployeeType,
      resolve(obj: any) {
        Employee.findById(obj.employee);
      },
    },
    customer: {
      type: CustomerType,
      resolve(obj: any) {
        Customer.findById(obj.customer);
      },
    },
    reviewedOn: { type: Date },
    url: { type: GraphQLString },
    hidden: { type: GraphQLBoolean },
  }),
});

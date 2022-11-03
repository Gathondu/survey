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
      resolve(_: any, obj: any) {
        Employee.findById(obj.id);
      },
    },
    customer: {
      type: CustomerType,
      resolve(_: any, obj: any) {
        Customer.findById(obj.id);
      },
    },
    reviewedOn: { type: Date },
    url: { type: GraphQLString },
    hidden: { type: GraphQLBoolean },
  }),
});

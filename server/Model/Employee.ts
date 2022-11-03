// import { CompanyType, Company } from "./Company";
import { Schema, InferSchemaType, model } from "mongoose";

const EmployeeSchema = new Schema({
  firstName: { type: String, required: true, maxLength: 20 },
  lastName: { type: String, required: true, maxLength: 20 },
  employeeId: { type: String, required: true },
  branch: { type: Schema.Types.ObjectId, ref: "Branch", required: true },
  hidden: Boolean,
});

EmployeeSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

EmployeeSchema.virtual("fullId").get(function () {
  return `${this.firstName} ${this.lastName} ${this.employeeId}`;
});

EmployeeSchema.virtual("url").get(function () {
  return `/employee/${this._id}`;
});

export type EmployeeType = InferSchemaType<typeof EmployeeSchema>;

export const Employee = model("Employee", EmployeeSchema);

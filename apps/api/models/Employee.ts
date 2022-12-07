import { Schema, InferSchemaType, model } from "mongoose";

const EmployeeSchema = new Schema(
  {
    firstName: { type: String, required: true, maxLength: 20 },
    lastName: { type: String, required: true, maxLength: 20 },
    email: { type: String, required: true, maxLength: 50 },
    countryCode: { type: String, required: true, maxLength: 4 },
    phone: { type: String, required: true, maxLength: 12 },
    employeeId: { type: String, required: true },
    branch: { type: Schema.Types.ObjectId, ref: "Branch", required: true },
    hidden: { type: Boolean, default: false },
  },
  { timestamps: true }
);

EmployeeSchema.virtual("phoneNumber").get(function () {
  return `${this.countryCode} ${this.phone}`;
});

EmployeeSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

EmployeeSchema.virtual("fullId").get(function () {
  // @ts-ignore
  return `${this.fullName} ${this.email} ${this.phoneNumber} ${this.employeeId}`;
});

EmployeeSchema.virtual("url").get(function () {
  return `/employee/${this._id}`;
});

export type EmployeeType = InferSchemaType<typeof EmployeeSchema>;

export const Employee = model("Employee", EmployeeSchema, "employees");

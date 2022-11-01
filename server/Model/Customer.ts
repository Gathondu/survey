import { Schema, InferSchemaType, model } from "mongoose";

const CustomerSchema = new Schema({
  firstName: { type: String, required: true, maxLength: 20 },
  lastName: { type: String, maxLength: 20 },
  phone: { type: Number, required: true },
  email: String,
  promotions: Boolean,
  hidden: Boolean,
});

CustomerSchema.virtual("url").get(function () {
  return `/customer/${this._id}`;
});

CustomerSchema.virtual("fullName").get(function () {
  return this.lastName
    ? `${this.firstName} ${this.lastName}`
    : `${this.firstName}`;
});

CustomerSchema.virtual("fullDetails").get(function () {
  if (this.lastName && this.email) {
    return `${this.firstName} ${this.lastName}: PhoneNumber +254${this.phone} Email: ${this.email}`;
  } else if (!this.lastName && this.email) {
    return `${this.firstName}: PhoneNumber +254${this.phone} Email: ${this.email}`;
  } else {
    return `${this.firstName}: PhoneNumber +254${this.phone}`;
  }
});

export type CustomerType = InferSchemaType<typeof CustomerSchema>;

export const Customer = model("Customer", CustomerSchema);

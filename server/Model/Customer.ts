import { Schema, InferSchemaType, model } from "mongoose";

const CustomerSchema = new Schema({
  firstName: { type: String, required: true, maxLength: 20 },
  lastName: { type: String, maxLength: 20 },
  countryCode: { type: String, maxLength: 4 },
  phone: { type: Number, required: true },
  email: String,
  promotions: { type: Boolean, default: false },
  hidden: { type: Boolean, default: false },
});

CustomerSchema.virtual("url").get(function () {
  return `/customer/${this._id}`;
});

CustomerSchema.virtual("fullName").get(function () {
  return this.lastName
    ? `${this.firstName} ${this.lastName}`
    : `${this.firstName}`;
});
CustomerSchema.virtual("phoneNumber").get(function () {
  return `${this.countryCode}${this.phone}`;
});

CustomerSchema.virtual("fullDetails").get(function () {
  if (this.lastName && this.email) {
    /* @ts-ignore */
    return `${this.firstName} ${this.lastName}: PhoneNumber ${this.phoneNumber} Email: ${this.email}`;
  } else if (!this.lastName && this.email) {
    /* @ts-ignore */
    return `${this.firstName}: PhoneNumber ${this.phoneNumber} Email: ${this.email}`;
  } else {
    /* @ts-ignore */
    return `${this.firstName}: PhoneNumber ${this.phoneNumber}`;
  }
});

export type CustomerType = InferSchemaType<typeof CustomerSchema>;

export const Customer = model("Customer", CustomerSchema);

import { Schema, InferSchemaType, model } from "mongoose";

const CompanySchema = new Schema(
  {
    name: { type: String, required: true, maxLength: 100 },
    location: { type: String, required: true, maxLength: 100 },
    website: { type: String },
    hidden: { type: Boolean, default: false },
  },
  { timestamps: true }
);

CompanySchema.virtual("url").get(function (this: CompanyType) {
  return `/company/${this._id}`;
});

export type CompanyType = InferSchemaType<typeof CompanySchema>;

export const Company = model("Company", CompanySchema, "companies");

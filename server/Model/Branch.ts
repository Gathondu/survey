import { Schema, InferSchemaType, model } from "mongoose";

const BranchSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  location: { type: String, required: true, maxLength: 100 },
  company: { type: Schema.Types.ObjectId, ref: "Company", required: true },
  hidden: Boolean,
  meta: {
    employees: Number,
  },
});

BranchSchema.virtual("url").get(function () {
  return `/branch/${this._id}`;
});

export type BranchType = InferSchemaType<typeof BranchSchema>;

export const Branch = model("Branch", BranchSchema, "branches");

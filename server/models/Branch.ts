import { Schema, InferSchemaType, model } from "mongoose";

const BranchSchema = new Schema(
  {
    name: { type: String, required: true, maxLength: 100 },
    location: { type: String, required: true, maxLength: 100 },
    company: { type: Schema.Types.ObjectId, ref: "Company", required: true },
    employees: { type: [{ type: Schema.Types.ObjectId, ref: "Employee" }] },
    urlId: { type: String, required: true },
    hidden: { type: Boolean, default: false },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

BranchSchema.virtual("url").get(function () {
  return `/branch/${this._id}`;
});

export type BranchType = InferSchemaType<typeof BranchSchema>;

export const Branch = model("Branch", BranchSchema, "branches");

import { Schema, InferSchemaType, model } from "mongoose";

const ReviewSchema = new Schema({
  rating: {
    type: Number,
    min: 0,
    max: 5,
    required: [true, "You must give a rating!"],
  },
  comment: { type: String },
  employee: {
    type: Schema.Types.ObjectId,
    ref: "Employee",
    required: [true, "Please let us know who served you. Thanks!"],
  },
  customer: { type: Schema.Types.ObjectId, ref: "Customer" },
  reviewedOn: { type: Date, default: Date.now() },
});

ReviewSchema.virtual("url").get(function () {
  return `/review/${this._id}`;
});

export type ReviewType = InferSchemaType<typeof ReviewSchema>;

export const Review = model("Review", ReviewSchema);

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
  },
  customer: { type: Schema.Types.ObjectId, ref: "Customer" },
  reviewDate: { type: String, default: Date.now().toString() },
  hidden: { type: Boolean, default: false },
});

ReviewSchema.virtual("url").get(function () {
  return `/review/${this._id}`;
});

export type ReviewType = InferSchemaType<typeof ReviewSchema>;

export const Review = model("Review", ReviewSchema, "reviews");

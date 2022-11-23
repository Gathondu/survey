import { Schema, InferSchemaType, model } from "mongoose";

const UrlSchema = new Schema(
  {
    urlId: { type: String, required: true },
    originalUrl: { type: String, required: true },
    clicks: { type: Number, required: true, default: 0 },
    hidden: { type: Boolean, default: false },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

export type UrlType = InferSchemaType<typeof UrlSchema>;

export const Url = model("Url", UrlSchema, "urls");

import { Schema, InferSchemaType, model } from 'mongoose'

const ReviewSchema = new Schema(
  {
    rating: {
      type: Number,
      min: 0,
      max: 5,
      required: [true, 'You must give a rating!'],
    },
    comment: { type: String },
    employee: {
      type: Schema.Types.ObjectId,
      ref: 'Employee',
    },
    customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
    hidden: { type: Boolean, default: false },
  },
  { timestamps: { createdAt: 'reviewedOn' } },
)

ReviewSchema.virtual('url').get(function (this: RType) {
  return `/review/${this._id}`
})

export type ReviewType = InferSchemaType<typeof ReviewSchema>
type RType = ReviewType & { _id: string }

export const Review = model('Review', ReviewSchema, 'reviews')

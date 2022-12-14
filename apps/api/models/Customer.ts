import { Schema, InferSchemaType, model } from 'mongoose'

const CustomerSchema = new Schema(
  {
    firstName: { type: String, required: true, maxLength: 20 },
    lastName: { type: String, maxLength: 20 },
    countryCode: { type: String, maxLength: 4 },
    phone: { type: String, required: true, maxLength: 12 },
    email: { type: String, maxLength: 50 },
    promotions: { type: Boolean, default: false },
    hidden: { type: Boolean, default: false },
  },
  { timestamps: true },
)

CustomerSchema.virtual('url').get(function (this: CUType) {
  return `/customer/${this._id}`
})

CustomerSchema.virtual('fullName').get(function (this: CustomerType) {
  return this.lastName
    ? `${this.firstName} ${this.lastName}`
    : `${this.firstName}`
})
CustomerSchema.virtual('phoneNumber').get(function (this: CustomerType) {
  return `${this.countryCode} ${this.phone}`
})

CustomerSchema.virtual('fullDetails').get(function (this: CustomerType) {
  if (this.lastName && this.email) {
    /* @ts-ignore */
    return `${this.firstName} ${this.lastName}: PhoneNumber ${this.phoneNumber} Email: ${this.email}`
  } else if (!this.lastName && this.email) {
    /* @ts-ignore */
    return `${this.firstName}: PhoneNumber ${this.phoneNumber} Email: ${this.email}`
  } else {
    /* @ts-ignore */
    return `${this.firstName}: PhoneNumber ${this.phoneNumber}`
  }
})

export type CustomerType = InferSchemaType<typeof CustomerSchema>

type CUType = CustomerType & { _id: string }

export const Customer = model('Customer', CustomerSchema, 'customers')

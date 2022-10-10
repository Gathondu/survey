const mongoose = require("mongoose")

const Schema = mongoose.Schema

const CompanySchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  location: { type: String, required: true, maxLength: 100 },
  website: { type: String },
})

CompanySchema.virtual("url").get(function () {
  return `/company/${this._id}`
})

module.exports = mongoose.model("Company", CompanySchema, "companies")

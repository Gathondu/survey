const mongoose = require("mongoose")

const Schema = mongoose.Schema

const BranchSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  location: { type: String, required: true, maxLength: 100 },
  company: { type: Schema.Types.ObjectId, ref: "Company", required: true },
})

BranchSchema.virtual("url").get(function () {
  return `/branch/${this._id}`
})

module.exports = mongoose.model("Branch", BranchSchema, "branches")

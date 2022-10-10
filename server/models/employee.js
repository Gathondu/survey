const mongoose = require("mongoose")

const Schema = mongoose.Schema

const EmployeeSchema = new Schema({
  firstName: { type: String, required: true, maxLength: 20 },
  lastName: { type: String, required: true, maxLength: 20 },
  employeeId: { type: String, required: true },
  branch: { type: Schema.Types.ObjectId, ref: "Branch", required: true },
})

EmployeeSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastname}`
})

EmployeeSchema.virtual("fullId").get(function () {
  return `${this.firstName} ${this.lastname} ${this.employeeId}`
})

EmployeeSchema.virtual("employer").get(function () {
  return `${this.branch.company.name}: ${this.branch}`
})

EmployeeSchema.virtual("url").get(function () {
  return `/employee/${this._id}`
})

module.exports = mongoose.model("Employee", EmployeeSchema, "employees")

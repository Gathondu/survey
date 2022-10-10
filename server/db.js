const mongoose = require("mongoose")

mongoose.connect(
  process.env.DB_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  err => {
    if (err) console.log(err)
    else console.log("connected to database")
  }
)

const db = mongoose.connection

db.on("error", console.error.bind(console, "MongoDB connection error:"))

module.exports = db

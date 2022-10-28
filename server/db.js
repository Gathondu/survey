const mongoose = require("mongoose");
const uri = process.env.DB_STRING;

let _db;

module.exports = {
  connectToServer: function (callback) {
    mongoose.connect(
      uri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoCreate: true,
      },
      function (error) {
        return callback(error);
      }
    );
    _db = mongoose.connection;
    console.log("Connected to MONGODB.");
  },
  getDb: function () {
    return _db;
  },
};

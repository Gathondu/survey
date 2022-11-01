import { connect, connection, ConnectOptions } from "mongoose";

let _db: any;

const Database = {
  connectToServer: function (uri: string, callback: any) {
    connect(
      uri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoCreate: true,
      } as ConnectOptions,
      function (error) {
        return callback(error);
      }
    );
    _db = connection;
    console.log("Connected to MONGODB.");
  },
  getDb: function () {
    return _db;
  },
};

export default Database;

import mongoose, { ConnectOptions } from "mongoose";

let _db: any;

mongoose.Promise = global.Promise;

const database = {
  connectToServer: async function (uri: string, callback: any): Promise<void> {
    if (_db) {
      console.log("Using existing database connection");
      return Promise.resolve();
    }

    mongoose.connect(
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
    _db = mongoose.connections[0].readyState;
    console.log(`Connected to MONGODB!`);
  },
  getDb: async function () {
    return await _db;
  },
};

export default database;

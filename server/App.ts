/* eslint-disable import/first */
import * as dotenv from "dotenv";
dotenv.config({ path: "../.env" });

import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors, { CorsOptions } from "cors";
import bodyParser from "body-parser";

import Schema from "./Schema.js";
import Database from "./Db.js";

const port: number | string = process.env.SERVER_PORT || 5000;

const uri: string = process.env.DB_STRING || "";

const app = express();

const domains = process.env.ALLOWED_ORIGINS || "http://localhost:3000";
const whitelist = domains.split(",").map((domain) => domain.trim());

const corsOptions = {
  origin: function (origin: string, callback: any): void {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions as CorsOptions));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());
app.use(
  "/api",
  graphqlHTTP({
    schema: Schema,
    pretty: true,
    graphiql: true,
  })
);

app.listen(port, () => {
  Database.connectToServer(uri, function (err: string): void {
    if (err) console.log(`MONGODB ERROR: ${err}`);
  });
  console.log(`Server runnning on port: ${port}`);
});

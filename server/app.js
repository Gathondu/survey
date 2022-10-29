require("dotenv").config({ path: "../.env" });
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
const db = require("./db");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;

const app = express();

const domains = process.env.ALLOWED_ORIGINS || "http://localhost:3000";
const whitelist = domains.split(",").map((domain) => domain.trim());

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));
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
    schema,
    pretty: true,
    graphiql: true,
  })
);

app.listen(port, () => {
  db.connectToServer(function (err) {
    if (err) console.log(`MONGODB ERROR: ${err}`);
  });
  console.log(`Server runnning on port: ${port}`);
});

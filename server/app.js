require("dotenv").config({ path: "../.env" });
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
const db = require("./db");
const cors = require("cors");
const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(
  "/graphql",
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

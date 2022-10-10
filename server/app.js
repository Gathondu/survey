require("dotenv").config({ path: "../.env" })
const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const schema = require("./schema")
const db = require("./db")

db

const app = express()

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    pretty: true,
    graphiql: true,
  })
)

app.listen(3000, () => {
  console.log("Listening on port 3000")
})

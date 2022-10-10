const graphql = require("graphql")

const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql

const CompanyType = new GraphQLObjectType({
  name: "Company",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    location: { type: GraphQLString },
    website: { type: GraphQLString },
    url: { type: GraphQLString },
  }),
})

module.exports = CompanyType

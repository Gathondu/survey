const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
} = require("graphql");
const CompanyType = require("./types/company");
const Company = require("./models/company");

// const branch = mongoose.model("Branch", models.Branch)
// const employee = mongoose.model("Employee", models.Employee)
// const review = mongoose.model("Review", models.Review)
// const customer = mongoose.model("Customer", models.Customer)

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    company: {
      type: CompanyType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Company.findById(args.id);
      },
    },
    companies: {
      type: new GraphQLList(CompanyType),
      resolve(parent, args) {
        return Company.find({});
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addCompany: {
      type: CompanyType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        location: { type: new GraphQLNonNull(GraphQLString) },
        website: { type: GraphQLString },
      },
      resolve(parent, args) {
        let company = new Company({
          name: args.name,
          location: args.location,
          website: args.website,
        });
        return company.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});

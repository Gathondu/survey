import { Company as CT } from "../Type/index.js";
import { GraphQLNonNull, GraphQLString } from "graphql";
import { Company } from "../Model/index.js";

type args = {
  name: string;
  location: string;
  website?: string;
};

export const AddCompany = {
  type: CT,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    location: { type: new GraphQLNonNull(GraphQLString) },
    website: { type: GraphQLString },
  },
  resolve(_: any, args: args) {
    let company = new Company({
      name: args.name,
      location: args.location,
      website: args.website,
    });
    return company.save();
  },
};

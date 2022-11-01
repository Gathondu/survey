import { Company as GCompanyType } from "../Type/index.js";
import { Company } from "../Model/index.js";
import { GraphQLID, GraphQLList } from "graphql";

export const CompanyQuery = {
  type: GCompanyType,
  args: { id: { type: GraphQLID } },
  resolve(_: any, args: { id: string }) {
    return Company.findById(args.id);
  },
};

export const CompaniesQuery = {
  type: new GraphQLList(GCompanyType),
  resolve() {
    return Company.find({});
  },
};

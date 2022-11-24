import { GraphQLNonNull, GraphQLString } from "graphql";
import { Url } from "../models/Url.js";
import { UrlType } from "../types/Url.js";

export const UrlRecord = () => ({
  type: UrlType,
  args: { urlId: { type: new GraphQLNonNull(GraphQLString) } },
  async resolve(_: any, args: { urlId: string }) {
    let res = await Url.findOne({ urlId: args.urlId }).exec();
    if (res) return res;
    return `Error fetching Url from the database.`;
  },
});

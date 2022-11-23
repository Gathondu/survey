import { GraphQLNonNull, GraphQLString } from "graphql";
import { Url } from "../models/Url.js";
import { UrlType } from "../types/Url.js";

export const UrlRecord = () => ({
  type: UrlType,
  args: { urlId: { type: new GraphQLNonNull(GraphQLString) } },
  async resolve(_: any, args: { urlId: string }) {
    let res = await Url.find({ urlId: args.urlId });
    if (res) return res;
    return `Error fetching Url from the database.`;
  },
});

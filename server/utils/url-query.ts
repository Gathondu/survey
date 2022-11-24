import { GraphQLBoolean, GraphQLNonNull, GraphQLString } from "graphql";
import { Url } from "../models/Url.js";
import { UrlType } from "../types/Url.js";

export const UrlRecord = () => ({
  type: UrlType,
  args: {
    urlId: { type: new GraphQLNonNull(GraphQLString) },
    test: { type: new GraphQLNonNull(GraphQLBoolean) },
  },
  async resolve(_: any, args: { urlId: string; test: boolean }) {
    let res = await Url.findOne({ urlId: args.urlId }).exec();
    if (res) {
      if (!args.test) {
        await res.updateOne({ $inc: { clicks: 1 } });
      }
      return res;
    }
    return `Error fetching Url from the database.`;
  },
});

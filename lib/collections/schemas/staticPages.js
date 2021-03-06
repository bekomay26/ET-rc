import { SimpleSchema } from "meteor/aldeed:simple-schema";
import { Random } from "meteor/random";
import { registerSchema } from "@reactioncommerce/reaction-collections";

/**
 * Reaction Schemas StaticPages
 */
export const StaticPages = new SimpleSchema({
  _id: {
    type: String,
    defaultValue: Random.id(),
    optional: true
  },
  pageTitle: {
    label: "Page Title",
    type: String
  },
  pageURLAddress: {
    label: "Page URL Address",
    type: String
  },
  pageContent: {
    label: "Page Content",
    type: String
  },

  createdAt: {
    type: Date,
    autoValue: function () {
      if (this.isInsert) {
        return new Date();
      }
      return {
        $setOnInsert: new Date()
      };
    }
  },
  updatedAt: {
    type: Date,
    optional: true
  }
});

registerSchema("StaticPages", StaticPages);

import { Reaction } from "/server/api";

Reaction.registerPackage({
  name: "et-shop-reviews",
  label: "et-shop-review",
  settings: {},
  autoEnable: true,
  registry: [{
    route: "/display/shop/:id",
    name: "et-shop-review",
    template: "shopReview",
    workflow: "coreWorkFlow"
  }]
});

const { PricingStrategy } = require("./pricing_strategy");

class SedanPricingStrategy extends PricingStrategy {
  calculatePrice(hrs) {
    return hrs * 100;
  }
}
module.exports={
  SedanPricingStrategy
}

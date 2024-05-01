const { PricingStrategy } = require("./pricing_strategy");

class HatchBackPricingStrategy extends PricingStrategy {
  calculatePrice(hrs) {
    return hrs * 50;
  }
}

module.exports={
  HatchBackPricingStrategy
}
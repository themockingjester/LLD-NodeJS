const { PricingStrategy } = require("./pricing_strategy")

class XUVPricingStrategy extends PricingStrategy{
    calculatePrice(hrs){
        return hrs*200
    }
}
module.exports={
    XUVPricingStrategy
}
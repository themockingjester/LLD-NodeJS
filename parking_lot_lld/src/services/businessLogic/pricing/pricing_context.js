class PricingContext{
     constructor(pricingStrategy){
        this.pricingStrategy = pricingStrategy
     }
     calculatePrice(hrs){
        return this.pricingStrategy.calculatePrice(hrs)
     }
}
module.exports={
   PricingContext
}
class PaymentContext {
  constructor(paymentStrategy) {

    this.paymentStrategy = paymentStrategy;
  }

  makePayment(details){
    return this.paymentStrategy.pay(details)
  }
}
module.exports={
  PaymentContext
}
class PaymentContext {
  constructor(paymentStrategy) {
    this.paymentStrategy = paymentStrategy;
    return this;
  }
  makePayment(details) {
    return this.paymentStrategy.pay(details);
  }
}

module.exports = {
  PaymentContext,
};

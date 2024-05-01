const { randomUUID } = require("crypto");
const { PaymentStrategy } = require("./payment_strategy");

class CashPaymentStrategy extends PaymentStrategy {
  constructor() {
    super();
  }
  pay({ amount }) {
    console.log(`Successfully made payment of ${amount} (rupees) via cash`);
    return randomUUID();
  }
}
module.exports = {
  CashPaymentStrategy,
};

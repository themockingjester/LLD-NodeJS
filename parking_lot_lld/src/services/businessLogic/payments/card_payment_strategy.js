const { randomUUID } = require("crypto");
const { PaymentStrategy } = require("./payment_strategy");

class CardPaymentStrategy extends PaymentStrategy {
  constructor(){
    super()
  }
  pay({ cardNumber, cvv, expiry, amount }) {
    console.log(
      `Successfully made payment of ${amount} (rupees) via card ${cardNumber}`
    );
    return randomUUID();
  }
}
module.exports = {
  CardPaymentStrategy,
};

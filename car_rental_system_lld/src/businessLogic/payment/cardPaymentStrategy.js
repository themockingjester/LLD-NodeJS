const crypto = require("crypto");
const { PaymentStrategy } = require("../interfaces/paymentStrategy");

class CardPaymentStrategy extends PaymentStrategy {
  pay({ cardNumber, cvv, expiry, amount }) {
    this.id = crypto.randomUUID();
    this.cardNumber = cardNumber;
    this.cvv = cvv;
    this.expiry = expiry;
    this.amount = amount;
    return this;
  }
}

module.exports = {
  CardPaymentStrategy,
};

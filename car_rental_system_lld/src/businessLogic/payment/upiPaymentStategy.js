const crypto = require("crypto");
const { PaymentStrategy } = require("../interfaces/paymentStrategy");

class UPIPaymentStrategy extends PaymentStrategy {
  pay({ upiId, amount }) {
    this.id = crypto.randomUUID();

    this.upiId = upiId;
    this.amount = amount;
    return this;
  }
}

module.exports = {
  UPIPaymentStrategy,
};

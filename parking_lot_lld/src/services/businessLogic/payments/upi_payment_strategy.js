const { randomUUID } = require("crypto");
const { PaymentStrategy } = require("./payment_strategy");

class UPIPaymentStrategy extends PaymentStrategy {
  constructor() {
    super();
  }
  pay({ upiId, amount }) {
    console.log(
      `Successfully made payment of ${amount} (rupees) via upi ${upiId}`
    );

    return randomUUID();
  }
}
module.exports = {
  UPIPaymentStrategy,
};

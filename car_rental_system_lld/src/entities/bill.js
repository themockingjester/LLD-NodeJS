const crypto = require("crypto");

class Bill {
  constructor() {
    this.id = crypto.randomUUID();
    this.createdAt = new Date().toLocaleString();
    return this;
  }
  setUser(userId) {
    this.userId = userId;
    return this;
  }
  setReservation(reservationId) {
    this.reservationId = reservationId;
    return this;
  }
  setStatus(status) {
    this.status = status;
    return this;
  }
  setPayment(payment) {
    this.payment = payment;
    return this;
  }
}

module.exports = {
  Bill,
};

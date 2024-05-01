const crypto = require("crypto");
const { TicketInterface } = require("../../interfaces/ticket_interface");
class Ticket extends TicketInterface {
  constructor() {
    super();
    this.id = crypto.randomUUID();
    return this;
  }

  getTicket() {
    return this;
  }
  setUserId(userId) {
    this.userId = userId;
    return this;
  }
  setParkingSpace(parkingSpaceId) {
    this.parkingSpaceId = parkingSpaceId;
    return this;
  }
  setVehicle(vehicle) {
    this.vehicle = vehicle;
    return this;
  }
  setStatus(status) {
    this.status = status;
    return this;
  }
  setTime(hrs) {
    this.hrs = hrs;
    return this;
  }
  setAmount(amount) {
    this.amount = amount;
  }
  setPaymentData(paymentId,paymentMode) {
    this.paymentMode = paymentMode
    this.paymentId = paymentId
  }
}

module.exports = {
  Ticket,
};

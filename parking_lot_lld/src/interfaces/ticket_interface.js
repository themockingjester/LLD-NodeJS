class TicketInterface {
  getTicket() {}
  setUserId(userId) {}
  setParkingSpace(parkingSpaceId) {}
  setVehicle(vehicle) {}
  setStatus(status) {}
  setTime(hrs) {}
  setAmount(amount) {}
    setPaymentData(paymentId,paymentMode) {
    }
}
module.exports = {
  TicketInterface,
};

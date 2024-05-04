const crypto = require("crypto");
class Reservation {
  constructor() {
    this.id = crypto.randomUUID();
    return this;
  }
  setVehicle(vehicle) {
    this.vehicle = vehicle;
    return this;
  }

  setUser(userId) {
    this.userId = userId;
    return this;
  }
  setLocation(location) {
    this.location = location;
    return this;
  }
  setStatus(status) {
    this.status = status;
    return this;
  }
  setDays(days) {
    this.days = days;
    return this;
  }
  setStore(storeId) {
    this.storeId = storeId;
    return this;
  }
  setStartDate(date) {
    this.startDate = date;
    return this;
  }
  setPayableAmount(amount) {
    this.payableAmount = amount;
    return this;
  }
  setBill(bill) {
    this.bill = bill;
    return this;
  }
}
module.exports = {
  Reservation,
};

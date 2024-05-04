const crypto = require("crypto");
const { BILL_STATUS } = require("../constants/billContants");
const { ACCEPTED_PAYMENT_TYPES } = require("../constants/paymentConstants");
const { RESERVATION_STATUS } = require("../constants/reservationConstants");
const {
  VEHICLE_CATEGORY,
  VEHICLE_STATUS,
  VEHICLE_TYPES,
} = require("../constants/vehicleConstants");
const { Bill } = require("../entities/bill");
const { Reservation } = require("../entities/reservation");
const { CardPaymentStrategy } = require("./payment/cardPaymentStrategy");
const { PaymentContext } = require("./payment/paymentContext");
const { UPIPaymentStrategy } = require("./payment/upiPaymentStategy");
const { SedanPricing } = require("./pricing/cars/SedanPricing");
const { XUVPricing } = require("./pricing/cars/XUVPricing");
const { DefaultPricing } = require("./pricing/others/defaultPricing");
class ReservationManagement {
  reservations = [];
  constructor() {
    this.id = crypto.randomUUID();
    return this;
  }
  bookVehicle(
    vehicle,
    userId,
    location,
    days,
    startDate,
    store,
    paymentDetails
  ) {
    const reservation = new Reservation();
    reservation
      .setVehicle(vehicle)
      .setUser(userId)
      .setLocation(location)
      .setStatus(RESERVATION_STATUS.BOOKED)
      .setDays(days)
      .setStartDate(startDate)
      .setStore(store.id);
    let amount = 0;
    if (vehicle.type == VEHICLE_TYPES.CAR.XUV) {
      amount = new XUVPricing().getPrice(days);
    } else if (vehicle.type == VEHICLE_TYPES.CAR.SEDAN) {
      amount = new SedanPricing().getPrice(days);
    } else {
      amount = new DefaultPricing().getPrice(days);
    }
    reservation.setPayableAmount(amount);
    if (vehicle.category == VEHICLE_CATEGORY.CAR) {
      // car
      store.carInventoryMangement.updateVehicle(vehicle.id, {
        status: VEHICLE_STATUS.BOOKED,
      });
    } else {
      // Bike
      store.bikeInventoryManagement.updateVehicle(vehicle.id, {
        status: VEHICLE_STATUS.BOOKED,
      });
    }
    const bill = new Bill();
    bill
      .setStatus(BILL_STATUS.PENDING)
      .setUser(userId)
      .setReservation(reservation.id);
    paymentDetails.details["amount"] = reservation.payableAmount;
    if (paymentDetails.type == ACCEPTED_PAYMENT_TYPES.UPI) {
      let payment = new PaymentContext(new UPIPaymentStrategy());
      payment = payment.makePayment(paymentDetails.details);
      bill.setPayment(payment).setStatus(BILL_STATUS.PAID);
    } else if (paymentDetails.type == ACCEPTED_PAYMENT_TYPES.CARD) {
      let payment = new PaymentContext(new CardPaymentStrategy());
      payment = payment.makePayment(paymentDetails.details);
      bill.setPayment(payment).setStatus(BILL_STATUS.PAID);
    }
    reservation.setBill(bill);
    this.reservations.push(reservation);

    return reservation;
  }
  updateReservation(reservationId, newData) {
    for (let i = 0; i < this.reservations.length; i++) {
      const currReservation = this.reservations[i];
      const { vehicle, userId, location, days, startDate, status, storeId } =
        newData;
      if (currReservation.id == reservationId) {
        if (vehicle) {
          currReservation.setVehicle(vehicle);
        }
        if (userId) {
          currReservation.setUser(userId);
        }
        if (location) {
          currReservation.setLocation(location);
        }
        if (days) {
          currReservation.setDays(days);
        }
        if (startDate) {
          currReservation.setStartDate(startDate);
        }
        if (status) {
          currReservation.setStatus(status);
        }
        if (storeId) {
          currReservation.setStore(storeId);
        }
        this.reservations[i] = currReservation;
        return currReservation;
      }
    }
  }
}
module.exports = {
  ReservationManagement,
};

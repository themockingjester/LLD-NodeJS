const { PAYMENT_TYPES } = require("../../constants/payment_constants");
const { TICKET_STATUS } = require("../../constants/ticket_contants");
const { VEHICLE_TYPES } = require("../../constants/vehicle_contants");
const {
  TicketControllerInterface,
} = require("../../interfaces/ticket_controller_interface");
const {
  CardPaymentStrategy,
} = require("../businessLogic/payments/card_payment_strategy");
const {
  CashPaymentStrategy,
} = require("../businessLogic/payments/cash_payment_strategy");
const { PaymentContext } = require("../businessLogic/payments/payment_context");
const {
  UPIPaymentStrategy,
} = require("../businessLogic/payments/upi_payment_strategy");
const {
  HatchBackPricingStrategy,
} = require("../businessLogic/pricing/hatchback_pricing_strategy");
const { PricingContext } = require("../businessLogic/pricing/pricing_context");
const {
  SedanPricingStrategy,
} = require("../businessLogic/pricing/sedan_pricing_strategy");
const {
  XUVPricingStrategy,
} = require("../businessLogic/pricing/xuv_pricing_strategy");
const { Ticket } = require("./ticket");

class TicketController extends TicketControllerInterface {
  allTickets = [];
  calculateTicketPrice(ticket, hrs) {
    if (ticket.vehicle.type == VEHICLE_TYPES.SEDAN) {
      return new PricingContext(new SedanPricingStrategy()).calculatePrice(hrs);
    } else if (ticket.vehicle.type == VEHICLE_TYPES.XUV) {
      return new PricingContext(new XUVPricingStrategy()).calculatePrice(hrs);
    } else if (ticket.vehicle.type == VEHICLE_TYPES.HATCH_BACK) {
      return new PricingContext(new HatchBackPricingStrategy()).calculatePrice(
        hrs
      );
    } else {
      return undefined;
    }
  }
  updateTicket(ticketId, dataToBeUpdated) {
    for (let i = 0; i < this.allTickets.length; i++) {
      if (this.allTickets[i].id == ticketId) {
        this.allTickets[i] = {
          ...this.allTickets[i],
          ...dataToBeUpdated,
        };
        return this.allTickets[i];
      }
    }
    return undefined;
  }
  addTicket(ticket) {
    this.allTickets.push(ticket);
  }
  getTicket(ticketId) {
    this.allTickets.forEach((currTicket) => {
      if (currTicket.id == ticketId) {
        return currTicket;
      }
    });
    return undefined;
  }
  payTicket(ticketId, paymentDetails) {
    for (let i = 0; i < this.allTickets.length; i++) {
      const currTicket = this.allTickets[i];
      if (
        currTicket.id == ticketId &&
        currTicket.status === TICKET_STATUS.UNPAID
      ) {
        let pricingContextObj;
        console.log(paymentDetails,766);
        if (paymentDetails.method == PAYMENT_TYPES.CARD) {
          pricingContextObj = new PaymentContext(new CardPaymentStrategy());
        } else if (paymentDetails.method == PAYMENT_TYPES.CASH) {
          pricingContextObj = new PaymentContext(new CashPaymentStrategy());
        } else if (paymentDetails.method == PAYMENT_TYPES.UPI) {
          pricingContextObj = new PaymentContext(new UPIPaymentStrategy());
        } else {
          console.log(
            `Only these payment modes available`,
            Object.keys(PAYMENT_TYPES)
          );
          return;
        }
        const paymentId = pricingContextObj.makePayment(
          paymentDetails?.details
        );
        currTicket.setPaymentData(paymentId, paymentDetails.method);
        currTicket.setStatus(TICKET_STATUS.PAID);
        this.allTickets[i] = currTicket;
        return currTicket;
      } else if(currTicket.id == ticketId){
        return currTicket
      }
    }
  }
  generateTicket(vehicle, userId, parkingSpaceId, hrs, status) {
    const ticket = new Ticket();
    ticket
      .setUserId(userId)
      .setParkingSpace(parkingSpaceId)
      .setStatus(status)
      .setVehicle(vehicle)
      .setTime(hrs);
    const ticketAmount = this.calculateTicketPrice(ticket, hrs);
    ticket.setAmount(ticketAmount);
    this.addTicket(ticket);
    return ticket;
  }
}
module.exports = {
  TicketController,
};

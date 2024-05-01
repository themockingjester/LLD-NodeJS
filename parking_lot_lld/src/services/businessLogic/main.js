/**
 * This is the main file where code execution starts 
 */
const { PAYMENT_TYPES } = require("../../constants/payment_constants");
const { TICKET_STATUS } = require("../../constants/ticket_contants");
const { VEHICLE_TYPES } = require("../../constants/vehicle_contants");
const {
  ParkingSpaceController,
} = require("../fundamentals/parking_space_controller");
const { TicketController } = require("../fundamentals/ticket_controller");
const { User } = require("../fundamentals/user");
const { Vehicle } = require("../fundamentals/vehicle");
const {
  DefaultParkingLotSetup,
} = require("./parkingSpace/default_parking_lot_setup");

function main() {
  // Creating Ticket Controller
  const ticketController = new TicketController();
  // Creating parking controller
  const parkingSpaceController = new ParkingSpaceController(ticketController);
  // Setting default parking lot
  new DefaultParkingLotSetup(parkingSpaceController);

  // Registering first user
  const user1 = new User();
  user1.setUserName("Yash").setUserAddress("Pune").setUserPhone("1245674545");
  // Registing user vehicle
  const vehicle1 = new Vehicle("MH2345123", user1.id, VEHICLE_TYPES.SEDAN);
  // Getting parking space
  let parkingSpace1 = parkingSpaceController.getParkingSpace(
    vehicle1.getVehicleDetails().type
  );
  // parking vehicle
  let ticket1 = parkingSpaceController.parkVehicle(
    parkingSpace1.id,
    vehicle1,
    user1.id,
    parkingSpaceController,
    12
  );

  // Registering second user
  const user2 = new User();
  user1
    .setUserName("Rakesh")
    .setUserAddress("Delhi")
    .setUserPhone("5678452222");
  // Registing user vehicle
  const vehicle2 = new Vehicle("DL34655454FG45", user2.id, VEHICLE_TYPES.XUV);
  // Getting parking space
  let parkingSpace2 = parkingSpaceController.getParkingSpace(
    vehicle2.getVehicleDetails().type
  );
  // parking vehicle
  let ticket2 = parkingSpaceController.parkVehicle(
    parkingSpace2.id,
    vehicle2,
    user2.id,
    parkingSpaceController,
    240
  );
  // user1 paying ticket
  ticket1 = ticketController.payTicket(ticket1.id, {
    method: PAYMENT_TYPES.CASH,
    details: {
      amount: ticket1.amount,
    },
  });
  if (ticket1.status == TICKET_STATUS.PAID) {
    parkingSpaceController.unparkVehicle(
      ticket1.vehicle.id,
      ticket1.parkingSpaceId
    );
  }
  console.log(parkingSpaceController.getAllParkingSpace(), 685);
}
main();

const { TICKET_STATUS } = require("../../constants/ticket_contants");
const { VEHICLE_TYPES } = require("../../constants/vehicle_contants");
const {
  ParkingSpaceControllerInterface,
} = require("../../interfaces/parking_space_controller_interface");
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
const { ParkingSpace } = require("./parking_space");
const { Ticket } = require("./ticket");
const { TicketController } = require("./ticket_controller");

class ParkingSpaceController extends ParkingSpaceControllerInterface {
  constructor(ticketController) {
    super();
    this.ticketController = ticketController;
  }
  parkingSpaces = [];
  parkedVehicles = [];
  parkingFloors = 0;
  addParkingSpace(parkingSpaceType, parkingSpaceFloorNo, parkingSpaceStatus) {
    this.parkingSpaces.push(
      new ParkingSpace(
        parkingSpaceType,
        parkingSpaceFloorNo,
        parkingSpaceStatus
      )
    );
  }
  getAllParkingSpace() {
    return this.parkingSpaces;
  }
  removeParkingSpace(parkingSpaceId) {
    const newParkingSpace = [];
    this.parkingSpaces.forEach((parkingSpace) => {
      if (parkingSpace.id != parkingSpaceId) {
        newParkingSpace.push(parkingSpace);
      }
    });
    this.parkingSpaces = newParkingSpace;
  }
  getParkingFloors() {
    return this.parkingFloors;
  }
  setParkingFloors(number) {
    this.parkingFloors = number;
  }

  occupyParkingSpace(parkingSpaceId, vehicleId, userId) {
    for (let i = 0; i < this.parkingSpaces.length; i++) {
      const currParkingSpace = this.parkingSpaces[i];
      if (currParkingSpace.id == parkingSpaceId) {
        currParkingSpace.parkingSpaceStatus = true;
        currParkingSpace.parkVehicle(vehicleId, userId);
        this.parkingSpaces[i] = currParkingSpace;
      }
    }
  }
  parkVehicle(parkingSpaceId, vehicle, userId, parkingSpaceController, hrs) {
    let isVehicleAlreadyParked = false;
    for (let i = 0; i < this.parkedVehicles.length; i++) {
      const currVehicle = this.parkedVehicles[i];
      if (currVehicle.id == vehicle.id) {
        isVehicleAlreadyParked = true;
      }
    }
    if (!isVehicleAlreadyParked) {
      this.occupyParkingSpace(parkingSpaceId, vehicle.id, userId);
      this.parkedVehicles.push(vehicle);

      // generating ticket

      return this.ticketController.generateTicket(
        vehicle,
        userId,
        parkingSpaceId,
        hrs,
        TICKET_STATUS.UNPAID
      );
    }
  }
  unparkVehicle(vehicleId, parkingSpaceId) {
    let newVehicleParkedList = [];
    for (let i = 0; i < this.parkedVehicles.length; i++) {
      const currVehicle = this.parkedVehicles[i];
      if (currVehicle.id != vehicleId) {
        newVehicleParkedList.push(currVehicle);
      } else {
        this.unoccupyParkingSpace(parkingSpaceId);
      }
    }
    this.parkedVehicles = newVehicleParkedList;
  }
  unoccupyParkingSpace(parkingSpaceId) {
    for (let i = 0; i < this.parkingSpaces.length; i++) {
      const currParkingSpace = this.parkingSpaces[i];
      if (currParkingSpace.id == parkingSpaceId) {
        currParkingSpace.parkingSpaceStatus = false;
        currParkingSpace.unparkVehicle();
        currParkingSpace.userId = undefined
        this.parkingSpaces[i] = currParkingSpace;
      }
    }
  }
  getParkingSpace(vehicleType) {
    for (let i = 0; i < this.parkingSpaces.length; i++) {
      const currParkingSpace = this.parkingSpaces[i];
      
      if (
        currParkingSpace.getParkingSpaceType() == vehicleType &&
        !currParkingSpace.getParkingSpaceStatus()
      ) {
        return currParkingSpace;
      }
    }
    return undefined;
  }
}

module.exports = {
  ParkingSpaceController,
};

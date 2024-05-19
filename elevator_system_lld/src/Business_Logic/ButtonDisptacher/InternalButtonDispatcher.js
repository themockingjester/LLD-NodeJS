const crypto = require("crypto");
const { ELEVATOR_CAR_STATUS } = require("../../Constants/ElevatorConstants");

class InternalButtonDispatcher {
  constructor() {
    this.id = crypto.randomUUID();
    this.elevatorController = [];
  }
  addElevatorController(elevatorController) {
    this.elevatorController.push(elevatorController);
    return this;
  }
  submitRequest(sendingElevatorId, floor, direction) {
    this.elevatorController.forEach((currElevatorController) => {
      if (currElevatorController.elevatorObj.id == sendingElevatorId) {
        currElevatorController.submitNewRequest(floor, direction);
      }
    });
  }
}
module.exports = {
  InternalButtonDispatcher,
};

const crypto = require("crypto");

class ElevatorController {
  constructor(elevator) {
    this.id = crypto.randomUUID();
    this.elevatorObj = elevator;
  }
  submitNewRequest(floor, direction) {
    console.log(
      `Request received for floor ${floor} towards direction: ${direction} for elevator: ${this.elevatorObj.id}`
    );
    this.elevatorObj.move({ floor, direction });
  }
  controlElevatorCar() {}
}
module.exports = {
  ElevatorController,
};

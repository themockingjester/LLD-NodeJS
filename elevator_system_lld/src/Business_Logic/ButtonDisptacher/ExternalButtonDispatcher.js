const crypto = require("crypto");
const {
  ElevatorDispatchContext,
} = require("../ElevatorDispatcher/ElevatorDispatchContext");
const {
  ElevatorDispatchIdleElevatorAlgo,
} = require("../ElevatorDispatcher/ElevatorDispatchIdleElevatorAlgo");
const {
  ElevatorDispatchRandomAlgo,
} = require("../ElevatorDispatcher/ElevatorDispatchRandomAlgo");

class ExternalButtonDispatcher {
  constructor() {
    this.id = crypto.randomUUID();
    this.elevatorController = [];
  }
  addElevatorController(elevatorController) {
    this.elevatorController.push(elevatorController);
    return this;
  }
  submitRequest(floor, direction) {
    // Collecting all elevators
    const elevators = [];
    this.elevatorController.forEach((currElevatorController) => {
      elevators.push(currElevatorController.elevatorObj);
    });
    //Using IDLE Elevator algorithm for dispatching
    this.elevatorDisptacher = new ElevatorDispatchContext(
      new ElevatorDispatchIdleElevatorAlgo().setElevators(elevators)
    );
    const requestedElevator = this.elevatorDisptacher.findElevator({
      floor,
      direction,
    });
    if (!requestedElevator) {
      console.log(
        `Sorry unable to find any elevator at this time for floor: ${floor}, direction: ${direction}, Pls try again`
      );
      return;
    }
    this.elevatorController.forEach((currElevatorController) => {
      if (currElevatorController.elevatorObj.id == requestedElevator.id) {
        currElevatorController.submitNewRequest(floor, direction);
      }
    });
  }
}

module.exports = {
  ExternalButtonDispatcher,
};

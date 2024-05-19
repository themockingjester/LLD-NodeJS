const { ELEVATOR_CAR_STATUS } = require("../../Constants/ElevatorConstants");
const { ElevatorDispatchAlgo } = require("./ElevatorDispatchAlgoInterface");

class ElevatorDispatchIdleElevatorAlgo extends ElevatorDispatchAlgo {
  setElevators(elevators) {
    this.elevators = elevators;
    return this;
  }
  findElevator({ floorNumber, direction }) {
    let elevator;
    // get random elevator
    this.elevators.forEach((currElevator) => {
      if (currElevator.getCarStatus() == ELEVATOR_CAR_STATUS.IDLE) {
        elevator = currElevator;
      }
    });
    return elevator;
  }
}
module.exports = {
  ElevatorDispatchIdleElevatorAlgo,
};

const { ElevatorDispatchAlgo } = require("./ElevatorDispatchAlgoInterface");

class ElevatorDispatchRandomAlgo extends ElevatorDispatchAlgo {
  setElevators(elevators) {
    this.elevators = elevators;
    return this;
  }
  findElevator({ floorNumber, direction }) {
    // get random elevator
    return this.elevators[Math.floor(Math.random() * this.elevators.length)];
  }
}

module.exports = {
  ElevatorDispatchRandomAlgo,
};

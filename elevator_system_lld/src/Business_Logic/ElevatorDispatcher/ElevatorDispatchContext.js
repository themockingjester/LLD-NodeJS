class ElevatorDispatchContext {
  constructor(elevatorDispatchAlgo) {
    this.elevatorDispatchAlgo = elevatorDispatchAlgo;
  }
  findElevator(data) {
    return this.elevatorDispatchAlgo.findElevator(data);
  }
}
module.exports = {
  ElevatorDispatchContext,
};

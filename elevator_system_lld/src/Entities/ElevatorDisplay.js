const crypto = require("crypto");
class ElevatorDisplay {
  constructor() {
    this.id = crypto.randomUUID();
    return this;
  }
  setCurrentFloorNumber(floorNumber) {
    this.currentFloor = floorNumber;
    return this;
  }
  setCurrentDirection(direction) {
    this.currDirection = direction;
    return this;
  }
  getCurrentFloorNumber() {
    return this.currentFloor;
  }
  getCurrentDirection() {
    return this.currDirection;
  }
}

module.exports = {
  ElevatorDisplay,
};

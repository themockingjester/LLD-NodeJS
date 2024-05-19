const crypto = require("crypto");
const { pause } = require("../Business_Logic/Others/CommonUtils");
const {
  ELEVATOR_CAR_STATUS,
  ELEVATOR_DIRECTION,
} = require("../Constants/ElevatorConstants");

class ElevatorCar {
  constructor() {
    this.id = crypto.randomUUID();
    this.carStatus = ELEVATOR_CAR_STATUS.IDLE;
    return this;
  }
  setDisplay(display) {
    this.display = display;
    return this;
  }
  async move({ floor, direction }) {
    this.setCarStatus(ELEVATOR_CAR_STATUS.MOVING);
    this.changeDirection(direction);

    await pause(2000);
    console.log(`Elevator : ${this.id} is now moving`);
    await pause(2000);
    console.log(`Elevator : ${this.id} reached to requested floor`);

    await pause(2000);
    console.log(`Elevator : ${this.id} completed task`);
    this.setCarStatus(ELEVATOR_CAR_STATUS.IDLE);
    this.changeFloor(floor);
    this.changeDirection(ELEVATOR_DIRECTION.NA);
  }
  getFloor() {
    return this.display.getCurrentFloorNumber();
  }
  getElevatorDirection() {
    return this.display.getCurrentDirection();
  }
  setInternalButton(internalButton) {
    this.internalButton = internalButton;
    return this;
  }
  pressButton({ floor, direction }) {
    this.internalButton.pressButton(this.id, { floor, direction });
  }
  setCarStatus(carStatus) {
    this.carStatus = carStatus;
  }
  changeDirection(direction) {
    this.display.setCurrentDirection(direction);
  }
  changeFloor(floor) {
    this.display.setCurrentFloorNumber(floor);
  }
  getCarStatus() {
    return this.carStatus;
  }
}
module.exports = {
  ElevatorCar,
};

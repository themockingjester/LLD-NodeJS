const { ELEVATOR_DIRECTION } = require("../../Constants/ElevatorConstants");
const { ElevatorCar } = require("../../Entities/ElevatorCar");
const { ElevatorDisplay } = require("../../Entities/ElevatorDisplay");
const { InternalButton } = require("../../Entities/InternalButton");
const { ElevatorController } = require("./ElevatorController");

class ElevatorUtils {
  addWorkingElevatorCar({ internalButtonDispatcher }) {
    const elevator = new ElevatorCar();
    const elevatorInternalButton =
      new InternalButton().setInternalButtonDispatchObj(
        internalButtonDispatcher
      );
    const elevatorDisplay = new ElevatorDisplay();
    elevatorDisplay
      .setCurrentFloorNumber(0)
      .setCurrentDirection(ELEVATOR_DIRECTION.NA);
    elevator
      .setDisplay(elevatorDisplay)
      .setInternalButton(elevatorInternalButton);
    const elevatorController = new ElevatorController(elevator);
    return {
      elevator,
      elevatorController,
    };
  }
}

module.exports = {
  ElevatorUtils,
};

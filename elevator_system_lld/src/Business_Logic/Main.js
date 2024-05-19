const { ELEVATOR_DIRECTION } = require("../Constants/ElevatorConstants");
const { ElevatorCar } = require("../Entities/ElevatorCar");
const { ElevatorDisplay } = require("../Entities/ElevatorDisplay");
const { ExternalButton } = require("../Entities/ExternalButton");
const { InternalButton } = require("../Entities/InternalButton");
const {
  ExternalButtonDispatcher,
} = require("./ButtonDisptacher/ExternalButtonDispatcher");
const {
  InternalButtonDispatcher,
} = require("./ButtonDisptacher/InternalButtonDispatcher");
const { ElevatorController } = require("./Elevator/ElevatorController");
const { ElevatorUtils } = require("./Elevator/ElevatorUtils");
const { pause } = require("./Others/CommonUtils");

main = async () => {
  // Setting default environment

  const internalButtonDispatcher = new InternalButtonDispatcher();
  const externalButtonDispatcher = new ExternalButtonDispatcher();

  // ------------------    First Elevator  ------------------
  const { elevator: elevator1, elevatorController: elevator1Controller } =
    new ElevatorUtils().addWorkingElevatorCar({ internalButtonDispatcher });

  internalButtonDispatcher.addElevatorController(elevator1Controller);
  externalButtonDispatcher.addElevatorController(elevator1Controller);

  // --------------------------------------------------

  // ------------------    Second Elevator  ------------------
  const { elevator: elevator2, elevatorController: elevator2Controller } =
    new ElevatorUtils().addWorkingElevatorCar({ internalButtonDispatcher });

  internalButtonDispatcher.addElevatorController(elevator2Controller);
  externalButtonDispatcher.addElevatorController(elevator2Controller);

  // --------------------------------------------------
  const externalButton = new ExternalButton().setExternalButtonDispatchObj(
    externalButtonDispatcher
  );

  // Now pressing button from inside of elvator
  elevator1.pressButton({ floor: 2, direction: ELEVATOR_DIRECTION.DOWN });

  // Now pressing button from inside of elvator
  elevator2.pressButton({ floor: 7, direction: ELEVATOR_DIRECTION.UP });
  // Pressing button for calling elevator
  externalButton.pressButton({ floor: 4, direction: ELEVATOR_DIRECTION.UP });

  // trying after sometime
  await pause(9000);
  externalButton.pressButton({ floor: 4, direction: ELEVATOR_DIRECTION.UP });
};

main();

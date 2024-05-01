const {
  PARKING_SPACE_TYPES,
} = require("../../../constants/parking_space_contants");
const {
  ParkingSpaceController,
} = require("../../fundamentals/parking_space_controller");

class DefaultParkingLotSetup {
  constructor(parkingSpaceController) {
    parkingSpaceController.setParkingFloors(2);
    this.createDefaultParkingSpaces(parkingSpaceController);
  }

  createDefaultParkingSpaces(parkingSpaceController) {
    parkingSpaceController.addParkingSpace(
      PARKING_SPACE_TYPES.HATCH_BACK,
      0,
      false
    );
    parkingSpaceController.addParkingSpace(
      PARKING_SPACE_TYPES.HATCH_BACK,
      0,
      false
    );
    parkingSpaceController.addParkingSpace(
      PARKING_SPACE_TYPES.HATCH_BACK,
      0,
      false
    );
    parkingSpaceController.addParkingSpace(
      PARKING_SPACE_TYPES.HATCH_BACK,
      0,
      false
    );
    parkingSpaceController.addParkingSpace(PARKING_SPACE_TYPES.SEDAN, 1, false);
    parkingSpaceController.addParkingSpace(PARKING_SPACE_TYPES.SEDAN, 1, false);
    parkingSpaceController.addParkingSpace(PARKING_SPACE_TYPES.SEDAN, 1, false);
    parkingSpaceController.addParkingSpace(PARKING_SPACE_TYPES.SEDAN, 1, false);
    parkingSpaceController.addParkingSpace(PARKING_SPACE_TYPES.XUV, 0, false);
    parkingSpaceController.addParkingSpace(PARKING_SPACE_TYPES.XUV, 0, false);
    parkingSpaceController.addParkingSpace(PARKING_SPACE_TYPES.XUV, 1, false);

    parkingSpaceController.addParkingSpace(PARKING_SPACE_TYPES.XUV, 1, false);
  }
}

module.exports={
  DefaultParkingLotSetup
}

class ParkingSpaceControllerInterface {
  addParkingSpace() {}
  getAllParkingSpace() {}
  removeParkingSpace() {}
  getParkingFloors() {}
  setParkingFloors() {}
  occupyParkingSpace(parkingSpaceId, vehicleId) {}
  unoccupyParkingSpace(parkingSpaceId) {}
  parkVehicle(parkingSpaceId, vehicle, userId, parkingSpaceController, hrs) {}
  unparkVehicle(vehicleId, parkingSpaceId) {}
  getParkingSpace(vehicleType) {}
}

module.exports={
    ParkingSpaceControllerInterface
}

const crypto = require('crypto');
const { ParkingSpaceInterface } = require('../../interfaces/parking_space_interface');
class ParkingSpace extends ParkingSpaceInterface {
  constructor(parkingSpaceType, parkingSpaceFloorNo, parkingSpaceStatus) {
    super()
    this.parkingSpaceFloorNo = parkingSpaceFloorNo;
    this.parkingSpaceStatus = parkingSpaceStatus;
    this.parkingSpaceType = parkingSpaceType;
    this.id = crypto.randomUUID()
    return this
  }
  parkVehicle(vehicle,userId){
    this.vehicle=vehicle
    this.userId= userId
  }
  unparkVehicle(){
    this.vehicle=undefined
  }
  getParkingSpaceType() {
    return this.parkingSpaceType;
  }
  // Tells wheather space is empty or not 
  getParkingSpaceStatus() {
    return this.parkingSpaceStatus;
  }
  getParkingSpaceFloorNo() {
    return this.parkingSpaceFloorNo;
  }
}

module.exports={
    ParkingSpace
}

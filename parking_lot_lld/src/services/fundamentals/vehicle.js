const { randomUUID } = require("crypto")
const { VehicleInterface } = require("../../interfaces/vehicle_interface")

class Vehicle extends VehicleInterface{
    getVehicleDetails(){
        return this
    }
    constructor(vehicleNumber,user,vehicleType){
        super()
        this.vehicleNumber = vehicleNumber
        this.user=user
        this.type = vehicleType 
        this.id= randomUUID()
        return this
    }
}

module.exports={
    Vehicle
}
const crypto  = require('crypto')
class Vehicle {
    constructor(){
        this.id = crypto.randomUUID()
        return this
    }
    setNumber(number){
        this.number = number
        return this
    }
    setVehicleType(type){
        this.type = type
        return this
    }
    setVehicleCategory(category){
        this.category=category
        return this
    }
    setStatus(status){
        this.status = status
        return this
    }
}
module.exports={
    Vehicle
}
const crypto = require('crypto')
const { BikeInventoryManagement } = require('../businessLogic/bikeInventoryManagement')
const { CarInventoryManagement } = require('../businessLogic/carInventoryManagement')
class Store {
    constructor(){
        this.id=crypto.randomUUID()
        this.carInventoryMangement = new CarInventoryManagement()
        this.bikeInventoryManagement = new BikeInventoryManagement()
        return this
    }
    setLocation(location){
        this.location = location
        return this
    }
    getStoreData(){
        return this
    }
    setStorePhone(phone){
        this.phone = phone
        return this
    }
}
module.exports={
    Store
}
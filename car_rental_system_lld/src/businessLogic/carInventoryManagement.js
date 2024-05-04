const { Vehicle } = require("../entities/vehicle");
const {
  VehicleInventoryManagement,
} = require("./interfaces/vehicleInventoryManagementInterface");

class CarInventoryManagement extends VehicleInventoryManagement {
  cars = [];
  filterHelper(list, filter, filterValue) {
    const result = [];
    for (let i = 0; i < list.length; i++) {
      const currData = list[i];
      if (currData[filter] == filterValue) {
        result.push(currData);
      }
    }
    return result;
  }
  getVehicle(filter) {
    const { id, number, category, type, status } = filter;
    let result = [...this.cars];
    if (id) {
      result = this.filterHelper(result, "id", id);
    }
    if (number) {
      result = this.filterHelper(result, "number", number);
    }
    if (category) {
      result = this.filterHelper(result, "category", category);
    }
    if (type) {
      result = this.filterHelper(result, "type", type);
    }
    if (status) {
      result = this.filterHelper(result, "status", status);
    }
    return result;
  }
  addVehicle(number, type, category, status) {
    let vehicle = new Vehicle();
    vehicle
      .setNumber(number)
      .setVehicleCategory(category)
      .setVehicleType(type)
      .setStatus(status);
    this.cars.push(vehicle);
    return vehicle;
  }
  removeVehicle(vehicleId) {
    const newList = [];
    for (let i = 0; i < this.cars.length; i++) {
      const currCar = this.cars[i];
      if (currCar.id != vehicleId) {
        newList.push(currCar);
      }
    }
    this.cars = newList;
  }
  getVehicles() {
    return this.cars;
  }
  setStore(storeId) {
    this.storeId = storeId;
  }

  updateVehicle(vehicleId, { number, type, category, status }) {
    for (let i = 0; i < this.cars.length; i++) {
      const currCar = this.cars[i];
      if (currCar.id == vehicleId) {
        if (number) {
          currCar.setNumber(number);
        }
        if (type) {
          currCar.setVehicleType(type);
        }
        if (category) {
          currCar.setVehicleCategory(category);
        }
        if (status) {
          currCar.setStatus(status);
        }
        this.cars[i] = currCar;
        return currCar;
      }
    }
  }
}

module.exports = {
  CarInventoryManagement,
};

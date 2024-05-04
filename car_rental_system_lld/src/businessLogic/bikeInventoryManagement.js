const { Vehicle } = require("../entities/vehicle");
const {
  VehicleInventoryManagement,
} = require("./interfaces/vehicleInventoryManagementInterface");

class BikeInventoryManagement extends VehicleInventoryManagement {
  bikes = [];

  filterHelper(list, filter, filterValue) {
    const result = [];
    for (let i = 0; i < list.length; i++) {
      const currData = list[i];
      if ((currData[filter] = filterValue)) {
        result.push(currData);
      }
    }
    return result;
  }
  getVehicle(filter) {
    const { id, number, category, type, status } = filter;
    let result = [...this.bikes];
    if (id) {
      result = this.filterHelper(result, "id", id);
    }
    if (number) {
      result = this.filterHelper(result, "number", number);
    }
    if (category) {
      result = this.filterHelper(result, "id", category);
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
    this.bikes.push(vehicle);
    return vehicle;
  }
  removeVehicle(vehicleId) {
    const newList = [];
    for (let i = 0; i < this.bikes.length; i++) {
      const currBike = this.bikes[i];
      if (currBike.id != vehicleId) {
        newList.push(currBike);
      }
    }
    this.bikes = newList;
  }
  getVehicles() {
    return this.bikes;
  }
  setStore(storeId) {
    this.storeId = storeId;
  }

  updateVehicle(vehicleId, {number, type, category, status}) {
    for (let i = 0; i < this.bikes.length; i++) {
      const currBike = this.bikes[i];
      if (currBike.id == vehicleId) {
        if (number) {
          currBike.setNumber(number);
        }
        if (type) {
          currBike.setVehicleType(type);
        }
        if (category) {
          currBike.setVehicleCategory(category);
        }
        if (status) {
          currBike.setStatus(status);
        }
        this.bikes[i] = currBike;
        return currBike;
      }
    }
  }
}

module.exports = {
  BikeInventoryManagement,
};

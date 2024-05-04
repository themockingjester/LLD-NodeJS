const {
  VehiclePricingInterface,
} = require("../../interfaces/vehiclePricingInterface");

class DefaultPricing extends VehiclePricingInterface {
  getPrice(days) {
    return days * 100;
  }
}

module.exports = {
  DefaultPricing,
};

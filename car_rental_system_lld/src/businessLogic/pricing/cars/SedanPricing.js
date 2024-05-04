const {
  VehiclePricingInterface,
} = require("../../interfaces/vehiclePricingInterface");

class SedanPricing extends VehiclePricingInterface {
  getPrice(days) {
    return 200 * days;
  }
}

module.exports = {
  SedanPricing,
};

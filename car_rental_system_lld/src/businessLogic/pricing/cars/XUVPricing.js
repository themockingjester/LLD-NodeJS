const {
  VehiclePricingInterface,
} = require("../../interfaces/vehiclePricingInterface");

class XUVPricing extends VehiclePricingInterface {
  getPrice(days) {
    return 500 * days;
  }
}

module.exports = {
  XUVPricing,
};

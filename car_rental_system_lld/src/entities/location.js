const crypto = require("crypto")

class Location {
  constructor() {
    this.id = crypto.randomUUID();
    return this;
  }
  setState(state) {
    this.state = state;
    return this;
  }
  setCountry(country) {
    this.country = country;
    return this;
  }
  setCity(city) {
    this.city = city;
    return this;
  }
  setAddress(address) {
    this.address = address;
    return this;
  }
}

module.exports={
    Location
}
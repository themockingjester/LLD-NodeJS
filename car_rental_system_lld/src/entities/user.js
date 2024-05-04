const crypto = require("crypto");
class User {
  constructor() {
    this.id = crypto.randomUUID();
    return this;
  }
  setName(name) {
    this.name = name;
    return this;
  }
  setPhone(phone) {
    this.phone = phone;
    return this;
  }
  setAddress(address) {
    this.address = address;
    return this;
  }
  getUser() {
    return this;
  }
}
module.exports = { User };

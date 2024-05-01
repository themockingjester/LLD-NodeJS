const { randomUUID } = require("crypto");
const { UserInterface } = require("../../interfaces/user_interface");

class User extends UserInterface {
  constructor() {
    super()
    this.id = randomUUID()
  }
  setUserName(name) {
    this.name = name;
    return this;
  }
  setUserPhone(phone) {
    this.phone = phone;
    return this;
  }
  setUserAddress(address) {
    this.address = address;
    return this;
  }

  getUser() {
    return this;
  }
}
module.exports={
    User
}

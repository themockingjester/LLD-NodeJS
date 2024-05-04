const { Store } = require("../entities/store");
const { User } = require("../entities/user");

class VehicleRentalSystem {
  users = [];
  stores = [];

  // CRUD for user and store
  addUser(name, phone, address) {
    const user = new User().setName(name).setPhone(phone).setAddress(address);
    this.users.push(user);
    return user;
  }
  updateUser(userId, { name, phone, address }) {
    for (let i = 0; i < this.users.length; i++) {
      const currentUser = this.users[i];
      if (currentUser.id == userId) {
        if (name) currentUser.setName(name);
        if (phone) currentUser.setPhone(phone);
        if (address) currentUser.setAddress(address);
        this.users[i] = currentUser;
        return currentUser;
      }
    }
  }
  removeUser(userId) {
    const newUsers = [];
    for (let i = 0; i < this.users.length; i++) {
      const currentUser = this.users[i];
      if (currentUser.id != userId) {
        newUsers.push(currentUser);
      }
    }
    this.users = newUsers;
  }
  getUser(userId) {
    for (let i = 0; i < this.users.length; i++) {
      const currentUser = this.users[i];
      if (currentUser.id == userId) {
        return currentUser;
      }
    }
  }

  addStore(phone, location) {
    const store = new Store();
    store.setStorePhone(phone).setLocation(location);
    this.stores.push(store);
    return store;
  }
  removeStore(storeId) {
    const newStoreList = [];
    for (let i = 0; i < this.stores.length; i++) {
      const currStore = this.stores[i];
      if (storeId != currStore.id) {
        newStoreList.push(currStore);
      }
    }
    this.stores = newStoreList;
  }
  getStore(storeId) {
    for (let i = 0; i < this.stores.length; i++) {
      const currStore = this.stores[i];
      if (storeId == currStore.id) {
        return currStore
      }
    }
  }
  updateStore(storeId,phone,location){
    for (let i = 0; i < this.stores.length; i++) {
      const currStore = this.stores[i];
      if (storeId == currStore.id) {
        if(phone) currStore.setPhone(phone)
        if(location) currStore.setLocation(location)
        this.stores[i]=currStore
        return currStore
      }
    }
  }
}


module.exports={
    VehicleRentalSystem
}
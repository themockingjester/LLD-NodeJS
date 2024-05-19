const crypto = require("crypto");

class InternalButton {
  constructor() {
    this.id = crypto.randomUUID();
    return this;
  }
  setInternalButtonDispatchObj(internalBDispatcher) {
    this.internalButtonDispatcher = internalBDispatcher;
    return this;
  }
  pressButton(elevatorId, { floor, direction }) {
    this.internalButtonDispatcher.submitRequest(elevatorId, floor, direction);
  }
}
module.exports = {
  InternalButton,
};

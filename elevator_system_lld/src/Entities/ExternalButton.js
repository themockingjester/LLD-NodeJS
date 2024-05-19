const crypto = require("crypto");

class ExternalButton {
  constructor() {
    this.id = crypto.randomUUID();
    return this;
  }
  setExternalButtonDispatchObj(externalBDispatcher) {
    this.externalButtonDispatcher = externalBDispatcher;
    return this;
  }
  pressButton({ floor, direction }) {
    this.externalButtonDispatcher.submitRequest(floor, direction);
  }
}
module.exports = {
  ExternalButton,
};

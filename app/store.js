
//store.js
import Value from "./Models/Value.js";
import Car from "./Models/Car.js"
import House from "./Models/House.js"

let _state = {
  activeValue: new Value({ title: "Value" }),
  /** @type {Value[]} */
  values: [],
  /** @type {Car[]} */
  cars: [],

  /** @type {House[]} */
  homes: [],

  /** @type {Job[]} */
  jobs: []


};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }

  /*
  commit(propertyName,data) //directly modifies state
  {

    _state[propertyName] = data; 




  }
  */
}

const STORE = new Store();
export default STORE;



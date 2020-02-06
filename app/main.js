//main.js

import ValuesController from "./Controllers/ValuesController.js";
import CarController from "./Controllers/CarController.js";
import HouseController from "./Controllers/HouseController.js";
import JobController from "./Controllers/JobController.js"

class App {

  constructor()
  {
    console.log('You are in the App constructor');
  }


  valuesController = new ValuesController();

  carController = new CarController();

  houseController = new HouseController();

  jobController = new JobController();
}

window["app"] = new App();

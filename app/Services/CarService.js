//CarService.js
import _store from "../store.js"
import Car from "../Models/Car.js"


class CarService {
    constructor() {
        console.log("In CarService Constructor");

    }

    addCar(newCar) {
        newCar = new Car(newCar); //passing in an object literal, create a class object out of it
        _store.State.cars.push(newCar);
        console.log(_store.State.cars)
        //_store.State.cars.map(car => new Car(car)).push(newCar);
        //map breaks the reference to car because it creates a new Array:MAINTAINS PRIVACY

        //equivalent
        /*
        let tempArray =[];
        for(let i = 0; i < _store.State.cars.length; i++)
        {
            let c = _store.State.cars[i]
            tempArray.push(newCar);
        }

        */

    }
}

const CARSERVICE = new CarService(); //singleton: only one single reference
//everything is looking at the exact same thing
export default CARSERVICE;


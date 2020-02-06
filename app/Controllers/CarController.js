//CarController.js

import _carService from '../Services/CarService.js' //can call _carService whatever we want
import _store from '../store.js'

function _draw() {
    //get data
    //post data to page
    //format data

    //returning original reference so it can be changed NOT SAFE
    document.getElementById('jobs').hidden = true;
    document.getElementById('homes').hidden = true;
    document.getElementById("cars").hidden = false;
    let cars = _store.State.cars;
    let carsElem = document.getElementById("cars");

    let str = "";


    cars.forEach(car => {
        str += car.Template;

    });

    carsElem.innerHTML = str;




}

export default class CarController {
    constructor() {
        console.log('You are in the CarController');
    }

    addCar(event) {

        console.log(`Made it into addCar in CarController.js`)
        event.preventDefault();

        console.log(event);

        let formData = event.target;

        let newCar =
        {
            make: formData.make.value,
            model: formData.model.value,
            year: formData.year.value,
            price: formData.price.value,
            imgUrl: formData.imgUrl.value || "http://placehold.it/100x100",
            description: formData.description.value

        }

        //console.log(formData.make.value); //make is from index.html name = "make"

        _carService.addCar(newCar);

    
        console.log(`The name of the car is ${formData.make.value}`);

        console.log("Adding a car");

        formData.reset();

        $('#car-form').modal('toggle'); //jquery selector targets modal target and close
        _draw();
    }
}
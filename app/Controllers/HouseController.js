//HouseController.js

import _houseService from '../Services/HouseService.js';
import _store from '../store.js'

function _draw()
{
    document.getElementById("cars").hidden = true;
    document.getElementById('jobs').hidden = true;
    document.getElementById('homes').hidden = false;
    let homes = _store.State.homes;
    let homesElem = document.getElementById("homes");
    
    let str = ''

    homes.forEach(house => {
        str += house.Template;
    });

    homesElem.innerHTML = str;

}

export default class HouseController
{
    constructor()
    {
        console.log("You are in the HouseController constructor");
    }

    addHouse(event)
    {
        event.preventDefault();

        let formData = event.target;

        let newHouse = 
        {
            city:formData.city.value,  //city refers to 'name' property from html
            state:formData.state.value,
            address:formData.address.value,
            yearBuilt:formData.yearbuilt.value,
            squareFeet:formData.squareft.value,
            stories:formData.stories.value,
            price:formData.price.value,
            description:formData.description.value,
            imgUrl: formData.imgUrl.value || "http://placehold.it/100x100"

            //http://placehold.it/200x200


        }

        console.log(newHouse);
        _houseService.addHouse(newHouse);
        formData.reset();

        $('#house-form').modal('toggle'); //jquery selector targets modal target and close
        _draw();




    }

    
}
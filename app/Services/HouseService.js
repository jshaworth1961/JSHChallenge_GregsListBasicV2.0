//HouseService.js

import _store from "../store.js";
import House from "../Models/House.js";
import Car from "../Models/Car.js";

class HouseService {

    constructor()
    {
        console.log("You are in the HouseService constructor");
    }
    addHouse(newHouse)
    {
        newHouse = new House(newHouse);
        _store.State.homes.push(newHouse);
        console.log(_store.State.homes);
    }
}

const HOUSESERVICE = new HouseService();
export default HOUSESERVICE;
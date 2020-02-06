//Car.js
export default class Car {
    //constructor(make,model,year,price,description,imageUrl)
    constructor(data) {
        this.make = data.make;
        this.model = data.model;
        this.year = data.year;
        this.description = data.description;
        this.price = data.price;
        this.imgUrl = data.imgUrl;

    }

    get Template()
    {
        return  `
            
            <div class="col-12 col-md-12 border-1">
            <fieldset >
                <p>${this.make}</p>
                <p>${this.model}</p>
                <p>${this.year}</p>
                <p>${this.price}</p>
                <p>${this.description}</p>
                <img src = "${this.imgUrl}" alt =  "">
             </fieldset>
            </div>
           
        
        `
    }
}
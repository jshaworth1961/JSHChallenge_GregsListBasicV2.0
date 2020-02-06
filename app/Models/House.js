//House.js
export default class House {
    constructor(data) {
        console.log(`You are in the House constructor`);
        this.city = data.city;
        this.state = data.state;
        this.address = data.address;
        this.yearBuilt = data.yearBuilt;
        this.squareFeet = data.squareFeet;
        this.stories = data.stories;
        this.price = data.price;
        this.description = data.description;
        this.imageUrl = data.imageUrl 
    }


    get Template() {
        return `
            
            <div class = "col-12 col-md-12 border-1">
            <fieldset >
                <p>${this.city}</p>
                <p>${this.state}</p>
                <p>${this.address}</p>
                <p>${this.yearBuilt}</p>
                <p>${this.squareFeet}</p>
                <p>${this.stories}</p>
                <p>${this.price}</p>
                <p>${this.description}</p>
                <img src = "${this.imgUrl}" alt = "">
                </fieldset>
            </div>
            
        `
    }
}
//Job.js

export default class Job {
    constructor(data) {

        console.log(`You are in the Job constructor`);
        this.title = data.title,
            this.salary = data.salary,
            this.experienceNeeded = data.experienceNeeded,
            this.description = data.description
    }

    get Template() {
        return `
            
            <div class = "col-12 col-md-12 border-1">
            <fieldset >
                <p>${this.title}</p>
                <p>${this.salary}</p>
                <p>${this.experienceNeeded}</p>
                <p>${this.description}</p>
            </fieldset>
            </div>
            
        
        `
    }
}
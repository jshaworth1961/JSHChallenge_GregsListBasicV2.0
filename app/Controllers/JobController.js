//JobController.js

import _jobService from '../Services/JobService.js' //can call _jobService whatever we want
import _store from '../store.js'

function _draw() {
    //get data
    //post data to page
    //format data

    //returning original reference so it can be changed NOT SAFE
    document.getElementById('cars').hidden = true;
    document.getElementById('homes').hidden = true;
    document.getElementById("jobs").hidden = false;
    let jobs = _store.State.jobs;
    let jobsElem = document.getElementById("jobs");

    let str = "";


    jobs.forEach(job => {
        str += job.Template;

    });

    jobsElem.innerHTML = str;




}

export default class JobController {
    constructor() {
        console.log('You are in the JobController');
    }

    addJob(event) {

        console.log(`Made it into addJob in JobController.js`)
        event.preventDefault();

        console.log(event);

        let formData = event.target;

        let newJob =
        {
            title: formData.title.value,
            salary: formData.salary.value,
            experienceNeeded: formData.experienceneeded.value,
            description: formData.description.value,

        }

        //console.log(formData.make.value); //make is from index.html name = "make"

        _jobService.addJob(newJob);


        console.log(`The title of the job is ${formData.title.value}`);

        console.log("Adding a job");

        formData.reset();

        $('#job-form').modal('toggle'); //jquery selector targets modal target and close
        _draw();
    }
}
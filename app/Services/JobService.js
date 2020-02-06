//JobService.js

import _store from "../store.js"
import Job from "../Models/Job.js"


class JobService
{
    constructor()
    {
        console.log('You are in the JobService constructor');
    }
    addJob(newJob)
    {
        console.log(`Made it into addJob in JobService`)
        newJob = new Job(newJob);  //newJob is a literal object and is data
        _store.State.jobs.push(newJob);
        console.log(_store.State.jobs);
    }

}

const JOBSERVICE = new JobService();
export default JOBSERVICE;
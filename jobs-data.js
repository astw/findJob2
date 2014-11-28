var mongoose = require("mongoose");
var Promise = require("bluebird");

var Job = mongoose.model("Job");

var findJobs = function(query) {
    return Promise.cast(Job.find(query).exec());
}

exports.findJobs = findJobs;


var jobs = [

    {
        title: "Cook",
        description: "ou will be making bagels"
    }, {
        title: "c# developer",
        description: " ASP.NET mvc developer"
    }, {
        title: "Project Manager",
        description: "Communication skills "
    }

];

exports.connectDb = Promise.promisify(mongoose.connect, mongoose);

var createJob = Promise.promisify(Job.create, Job);

exports.seedJobs = function() {
    return findJobs({}).then(function(collection) {
        if (collection.length === 0) {
            return Promise.map(jobs, function(job) {
                 console.log("seeding.. data....");
                return createJob(job);
            })
        }
    })
}
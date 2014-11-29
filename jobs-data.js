var mongoose = require("mongoose");
var Promise = require("bluebird");
var JobModel =  require("./models/Job");

//var Job = JobModel.model
var Job = mongoose.model("Job");

var findJobs = function(query) {
    return Promise.cast(Job.find(query).exec());
}


var createJob = Promise.promisify(Job.create, Job);

exports.findJobs = findJobs;

exports.connectDb = Promise.promisify(mongoose.connect, mongoose);

exports.saveJob = createJob; 


exports.seedJobs = function() {
    return findJobs({}).then(function(collection) {
        if (collection.length === 0) {
            return Promise.map(seedJobs, function(job) {
                 console.log("seeding.. data....");
                return createJob(job);
            })
        }
    })
}


var seedJobs = [

    {
        title: "Cook",
        description: "ou will be making bagels"
    }, {
        title: "c# developer",
        description: " ASP.NET mvc developer"
    }, {
        title: "Project Manager",
        description: "Communication skills "
    },
    {
        title: "Java Spring MVC develper",
        description: "internet developer "
    },
];

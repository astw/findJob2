var mongoose = require("mongoose");

var jobSchema = mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    }

});


exports.seedJobs = function() {
    
var Job = mongoose.model("Job", jobSchema);
    Job.find({}).exec(function(err, collection) {
        if (collection.length == 0) {
            Job.create({
                title: "Cook",
                description: "ou will be making bagels"
            });
            Job.create({
                title: "c# developer",
                description: " ASP.NET mvc developer"
            });
            Job.create({
                title: "Project Manager",
                description: "Communication skills "
            });
        }
    })
}
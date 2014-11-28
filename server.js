var express = require("express"); 
var jobModel = require("./models/Job");

var jobsData = require("./jobs-data.js");

var app = express();

var jobService = require("./jobs-service.js")(jobsData, app);


app.set("views", __dirname);

app.set("view engine", "jade");
app.use(express.static(__dirname + "/public")); 

app.get("*", function(req, res) {
    res.render("index");
});


mongoose.connect("mongodb://localhost/jobfinder");
jobsData.connectDb("mongodb://nodedev:nodedev@ds053090.mongolab.com:53090/jobfinder")
    .then(function() {
        console.log("connected to mongodb ok");
        jobsData.seedJobs();
    });
 

var port = process.env.PORT || 3000

app.listen(port, process.env.IP);

console.log("server is listen at "+ port + ".....");

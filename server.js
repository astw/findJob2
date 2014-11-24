
var express = require("express"); 
var mongoose = require("mongoose");
var jobModel = require("./models/Job");

var app = express(); 

app.set("views", __dirname);

app.set("view engine", "jade");
app.use(express.static( __dirname + "/public") );


app.get("/api/jobs", function(req, res){
    mongoose.model("Job").find({}).exec(function(err, collection){
       console.log(collection);
       res.send(collection) ;
    });
});

app.get("*", function(req, res){
    res.render("index"); 
});


//mongoose.connect("mongodb://localhost/jobfinder");
mongoose.connect("mongodb://nodedev:nodedev@ds053090.mongolab.com:53090/jobfinder");

var connection  = mongoose.connection;

connection.once("open", function(){
    console.log("connected to mongodb ok");
    jobModel.seedJobs();
})

app.listen(process.env.PORT, process.env.IP);

console.log("server is listen.....");


var expect = require("chai").expect;
var mongoose = require("mongoose");
var jobModel = require("../../models/Job");
var Promise = require("bluebird");
var jobsData = require("../../jobs-data.js"); 

function resetJob() {
    return new Promise(function(resolve, reject) {
        mongoose.connection.collections["jobs"].drop(resolve, reject);
        console.log("database is droped");
    });
}


describe("get jobs", function() { 
    var jobs ;
    
    before(function(done){
         jobsData.connectDb("mongodb://localhost/jobfinder")
            .then(resetJob())
            .then(jobsData.seedJobs)
            .then(jobsData.findJobs)
            .then(function(collection) { 
                jobs = collection;
                done();
            });
    });
    
    after(function(){
       mongoose.connection.close(); 
    });
    
    it("should never be empty since jobs are seeded ", function() {
         expect(jobs.length).to.be.at.least(1);
    });
    
    it("should have a job with a title", function() {
        expect(jobs[0].title).to.not.be.empty;
        
    });  
    
    it("should have a job with a description", function() {
        expect(jobs[0].description).to.not.be.empty;
        
    });
});

describe("db save jobs", function(){
    
    // var job = {title:"Cook", description:"You will be making bread"};
    
    // var jobs; 
    
    // function saveTestJob(){
    //     return jobsData.saveJob(job);
    // };
    
    // before(function(done){
    //     jobsData.connectDb("mongodb://location/jobfinder")
    //     .then(resetJob())
    //     .then(function(){return jobsData.saveJob(job)})
    //     .then(jobsData.findJobs)
    //     .then(function setJobs(collection){
    //         jobs = collection;
    //         done();
    //     });
    // })
    
    // after(function(){
    //     mongoose.connection.close();
    // })
   
    // it("should have one job after saving one job", function(){
        
    //     expect(jobs).to.have.length(1);
        
    // })
    
});


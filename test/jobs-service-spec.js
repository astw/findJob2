var expect = require("chai").expect;
var request = require("supertest"); 
var express = require("express"); 

var app = new express();

var dataSaveJob; 

// this is the db mock
var db = {
    saveJob: function(job){
        dataSaveJob = job; 
    }
}

var jobService = require("../jobs-service")(db, app);   // db, and app are is injected into the service;




describe("save jobs", function() {

    it("should validate that title is greateer than 4 characters");

    it("should validate that title is less than 40 characters");

    it("should validate that description is greateer than 4 characters ")

    it("should validate that description is less than 250 characters ")


 
    var newJob = {
        title: "Cook",
        description: "ou will be making bagels"
    };


    it("should pass the job to the database save", function(done) {

        request(app).post("/api/jobs").send(newJob).end(function(err,res){ 
            
               expect(dataSaveJob).to.deep.equal(newJob);
               done();
               
        }); 

    });

    it("should return a status of 200 to the front end if the datavase saved");

    it("should return a job with an id");

    it("should return an error if the database failed");






});
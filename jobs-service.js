
var bodyParser = require("body-parser");

module.exports = function(db, app) {

    app.use(bodyParser.json());

   
    app.get("/api/jobs", function(req, res) {
      
      db.findJobs().then(function(collection) {
            res.send(collection);
        }) ;
         
      // res.send(db.findJobs());
      
    });
     

    app.post("/api/jobs", function(req, res) {
        console.log(req.body);
        db.saveJob(req.body);
        res.end();
    });



}
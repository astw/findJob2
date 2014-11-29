app = angular.module("app", ["ngResource"]);

angular.module("app").controller("testCtrl", function($scope, $resource, jobs) { 
    
    $scope.jobs =  $resource("/api/jobs").query();
    
    var newJob = {title:"test title", description:"test desc"}; 
    
    $scope.submit = function(){
         var job = {
             titleL:$scope.title,
             description:$scope.description
         };
        
         jobs.save(job);
         
         $scope.jobs.push(job);
    }

});
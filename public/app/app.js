angular.module("app", []);

angular.module("app").controller("testCtrl", function($scope) {
    $scope.jobs = [{
        title: "Sales Person",
        description: "You will fight here"
    }, {
        title: "Accoutant",
        description: "You will use keyboard"
    }, {
        title: "Programer",
        description: "web developer"
    }];

});
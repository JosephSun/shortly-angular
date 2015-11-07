angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links ) {
  // Your code here
  //Links refers to the factory.("Links"...) return in the services js file.
  console.log("$scope.routes", $scope.routes);
  $scope.getLinks = Links.getLinks;
  $scope.data = Links; 
  // $scope["/links"] = Links.linksRoute; 
  $scope.getLinks();
  $scope.addLinks = function(url) {
    Links.addLinks(url);
  }
  
  // $scope.links = function () {
  //     Links.linksRoute($scope.user)
  //       .then(function (token) {
  //         $window.localStorage.setItem('com.shortly', token);
  //         $location.path('/links');
  //       })
  //       .catch(function (error) {
  //         console.error(error);
  //       });
  //   };
});

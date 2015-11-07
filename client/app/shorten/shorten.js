angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = Links.addLinks;
  console.log("This is links in Shortencontroller", Links, "scope", $scope, "$location", location);
});

angular.module('shortly.services', [])

.factory('Links', function ($http) {
  var linkObj = {};
  var urlLinks = []
    linkObj.addLinks = function(url) {
      console.log('This is url',url);
      return $http({
          method: 'POST',
          url: 'app/shorten/shorten.html'
        })
      .then(function successCallback(response) {
        // console.log('url', url, '********************************response', response);
        // urlLinks.push(url);
        console.log("Success Function of addLinks");
        }, function errorCallback(response) {
          // console.log(Object.keys(response))
          console.log(response.status);
          // console.error(err);
          // console.log('response', response);
          console.log('theres an error in the links factory promise http');
        });
    };
    linkObj.getLinks = function() {
    return $http({
        method: 'GET',
        url: '/api/links'
      })
    .then(function successCallback(response) {
        linkObj.links = response.data;
        console.log("Going through successCallback")
      }, function errorCallback(response) {
        console.log('theres an error in the links factory promise http');
      });

    };

  linkObj.linksRoute = function (url) {
    return $http({
      method: 'POST',
      url: '/api/users/links',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  return linkObj;
  })
  .factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});

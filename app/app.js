'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/pixel.gif', {
        templateUrl:"view3.html",
        controller: 'View3Ctrl'
      }).otherwise({redirectTo: '/view1'});
}]);

'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  }).when('/view1/:pixel',{
    templateUrl:"/view1.html",
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ["$scope", "$routeParams",function(s,r) {
  s.load_in = "process_handshake_pixel_info";
  s.cookie_name = "check_for_handshake_id";
  s.handshake_id = "handshake_id";
  s.profile_id = "current_profile_id";
  
  s.pixel_received = r.pixel;
  
  s.process_handshake = function(load_in){
    alert("Function triggered: "+ load_in);
  }
  
  s.check_for_handshake_id = function(cookie_name){
    alert("Function triggered: "+ cookie_name);
  }
  
  s.store_handshake_toPC = function(handshake_id, profile_id){
    alert("Function triggered: " + handshake_id + "; " + profile_id);
  }
  
}]);
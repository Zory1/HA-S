'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ["$scope", "$http",function(s,http) {
 
  s.handshake_pixel ="pixel string";
  s.hash_phrase = "secret hash phrase";
  s.service_uid = "service provider user id";
  s.load_info = "load info";
  
  s.generate_pixel = function(load_info){
    alert("Function triggered: "+ load_info);
  }
  
  s.add_handshakeid_to_pixel = function(service_uid,hash_phrase){
    alert("Function triggered: "+ service_uid + "; " + hash_phrase);
  }
  
  s.serve_pixel =  function(handshake_pixel) {
    var url = 'https://server-app-zory.c9users.io:8080/pixels';
    var data = {};
    data["id_received"] = handshake_pixel;
    return   http.post(url,data) 
            .then(function successCallback(response){ 
                   
                         console.log("Request was successful, pixel passed on: "+ handshake_pixel);
                         console.log(response);
                        }, function errorCallback(response) { 
  
                    if( response.status == 404) {
                        console.log("Reqested page was not found. Pixel "+ handshake_pixel +" failled with response  404"); 
                    } else { 
                        console.log("Something else went wrong on server side. Response is faillure and not 404");
                    }});
  }
  
}]);
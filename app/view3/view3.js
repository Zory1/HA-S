'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', ["$scope", "$http",function(s,http) {
 
  s.hadnshake_pixel ="pixel string";
  s.hash_phrase = "secret hash phrase";
  s.service_uid = "service provider user id";
  s.load_info = "load info";
  
  s.generate_pixel = function(load_info){
    alert("Function triggered: "+ load_info);
  }
  
  s.add_handshakeid_to_pixel = function(service_uid,hash_phrase){
    alert("Function triggered: "+ service_uid + "; " + hash_phrase);
  }
  
  s.serve_pixel =  function(hadnshake_pixel) {
    return   http .post('/pixel.gif',{ pixel_load:hadnshake_pixel }) 
            .then( function( res) { 
                    if( res.success) {
                         console.log("Request was successful, pixel passed on: "+ hadnshake_pixel) }
                        }) 
            .catch( function( res) { 
                    if( res.status == 404) {
                        console.log("Reqested page was not found. Pixel "+ hadnshake_pixel +" failled with response  404"); 
                    } else { 
                        console.log("Something else went wrong on server side. Response is faillure and not 404");
                    }});
  }
  
}]);
'use strict';

angular.module('angularDemoFormbuilderApp', [
    'ngRoute'
]).

config(function(
    $routeProvider
){
    $routeProvider.
    
    when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    }).
    
    otherwise({
        redirectTo: '/'
    });
});

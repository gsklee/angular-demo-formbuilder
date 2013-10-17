'use strict';                                                                                                                                          

angular.module('angularDemoFormbuilderApp').

directive('appNav', function(
){
    return {
        restrict: 'E',
        templateUrl: 'views/nav.html',
        replace: true
    };
});

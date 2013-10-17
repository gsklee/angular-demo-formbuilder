'use strict';                                                                                                                                          

angular.module('angularDemoFormbuilderApp').

directive('appNav', function(
){
    return {
        restrict: 'E',
        templateUrl: 'views/nav.html',
        replace: true
    };
}).

directive('appNoBubbling', function(
){
    return function(scope, element, attrs) {
        element.on(attrs.appNoBubbling, function(event) {
            event.stopPropagation();
        });
    };
});

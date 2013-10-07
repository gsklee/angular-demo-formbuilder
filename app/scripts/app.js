'use strict';

angular.module('angularDemoFormbuilderApp', [
    'ui.router'
]).

config(function(
    $locationProvider,
    $stateProvider,
    $urlRouterProvider
){
    $locationProvider.html5Mode(true);

    $stateProvider.
    
    state('root', {
        url: '/',
        views: {
            'aside': {
                templateUrl: 'views/aside.html',
                controller: 'AsideCtrl as aside'
            },
            '': {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl as main'
            }
        }
    });

    $urlRouterProvider.otherwise('/');
});

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
                templateUrl: 'views/aside.field-list.html',
                controller: 'AsideCtrl as aside'
            },
            '': {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl as main'
            },
            '@root': {
                templateUrl: 'views/nav.html',
                controller: 'AsideCtrl as aside'
            }
        }
    }).

    state('field-settings', {
        url: '/field-settings',
        views: {
            'aside': {
                templateUrl: 'views/aside.field-settings.html',
                controller: 'AsideCtrl as aside'
            },
            '': {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl as main'
            },
            '@field-settings': {
                templateUrl: 'views/nav.html',
                controller: 'AsideCtrl as aside'
            }
        }
    }).

    state('form-settings', {
        url: '/form-settings',
        views: {
            'aside': {
                templateUrl: 'views/aside.form-settings.html',
                controller: 'AsideCtrl as aside'
            },
            '': {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl as main'
            },
            '@form-settings': {
                templateUrl: 'views/nav.html',
                controller: 'AsideCtrl as aside'
            }
        }
    });

    $urlRouterProvider.otherwise('/');
}).

run(function(
    $rootScope,
    $state,
    $stateParams
){
    $rootScope.$state = $state;

    $rootScope.$stateParams = $stateParams;
});

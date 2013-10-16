'use strict';

angular.module('angularDemoFormbuilderApp', [
    'ngResource',
    'ui.router'
]).

config(function(
    $locationProvider,
    $stateProvider,
    $urlRouterProvider
){
    $locationProvider.html5Mode(true);

    $stateProvider.
    
    state('main', {
        abstract: true,
        templateUrl: 'views/main.html',
        controller: 'MainCtrl as main'
    }).

    state('main.add', {
        url: '/',
        templateUrl: 'views/main.add.html',
        controller: 'AsideCtrl as aside'
    }).

    state('main.editComponent', {
        url: '/edit-component-{componentId}',
        templateUrl: 'views/main.editComponent.html',
        controller: 'AsideCtrl as aside'
    }).

    state('main.editForm', {
        url: '/edit-form',
        templateUrl: 'views/main.editForm.html',
        controller: 'AsideCtrl as aside'
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

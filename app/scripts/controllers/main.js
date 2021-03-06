'use strict';

angular.module('angularDemoFormbuilderApp').

controller('MainCtrl', function(
    $scope,
    $window,
    $localStorage,
    Form
){
    this.$storage = $localStorage.$default({
        lastUpdated: +new $window.Date
    });

    this.Form = Form;

    this.navs = [{
        text: 'Add Component',
        state: 'main.add'
    }, {
        text: 'Edit Component',
        state: 'main.editComponent',
        stateParams: '({componentId: 0})'
    }, {
        text: 'Edit Form',
        state: 'main.editForm'
    }];

    $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        'main.editComponent' === toState.name && toParams.componentId >= Form.components.length && event.preventDefault();
    });

    $scope.$watch(function() {
        return this.Form;
    }.bind(this), function() {
        $localStorage.lastUpdated = +new $window.Date;
    }.bind(this), true);
}).

controller('AsideCtrl', function(
    Form
){
    this.inputTypes = [
        'number',
        'text'
    ];

    this.addComponent = function(options) {
        /*
        // options {
        //     element
        //     label
        //     type
        // }
        */

        Form.components.isFull() || Form.components.push(options);
    };

    this.deleteComponent = function(componentId) {
        Form.components.splice(componentId, 1);
    };
});

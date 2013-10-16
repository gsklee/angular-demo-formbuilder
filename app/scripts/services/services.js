'use strict';

angular.module('angularDemoFormbuilderApp').

service('Form', function(
    $resource
){
    $resource('http://gsklee.apiary.io/form').get().$promise.then(function(response) {
        this.title = response.title;
        this.description = response.description;
    }.bind(this));

    this.components = []

    this.components.maxLength = 5;

    this.components.isFull = function() {
        return this.components.length === this.components.maxLength;
    }.bind(this);
});

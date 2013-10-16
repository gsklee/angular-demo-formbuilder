'use strict';

angular.module('angularDemoFormbuilderApp').

service('Form', function(
    $resource
){
    var _form = $resource('http://gsklee.apiary.io/form').get();

    _form.$promise.then(function(response) {
        this.title = _form.title;
        this.description = _form.description;
    }.bind(this));

    this.components = []

    this.components.maxLength = 5;

    this.components.isFull = function() {
        return this.components.length === this.components.maxLength;
    }.bind(this);

    this.save = function() {
        _form.title = this.title;
        _form.description = this.description;

        _form.$save();
    };
});

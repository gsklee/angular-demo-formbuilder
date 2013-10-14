'use strict';

angular.module('angularDemoFormbuilderApp').

service('Form', function(
){
    this.title = 'New Form';

    this.description = '(What\'s this form about?)';

    this.components = []

    this.components.maxLength = 5;

    this.components.isFull = function() {
        return this.components.length === this.components.maxLength;
    }.bind(this);
});

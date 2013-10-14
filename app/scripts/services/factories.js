'use strict';

angular.module('angularDemoFormbuilderApp').

factory('Form', function(
){
    return {
        title: 'New Form',

        description: '(What\'s this form about?)',

        maxComponent: 5,

        components: []
    };
});

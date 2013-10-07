'use strict';

angular.module('angularDemoFormbuilderApp').

controller('AsideCtrl', function(
    Form
){
    this.inputTypes = [
        'submit',
        'text'
    ];

    this.addToForm = function(options) {
        /*
        // options {
        //     element
        //     type
        // }
        */

        Form.components.push(options);
    };
}).

controller('MainCtrl', function(
    Form
){
    this.Form = Form;
});

'use strict';

angular.module('angularDemoFormbuilderApp').

controller('AsideCtrl', function(
    Form
){
    this.Form = Form;

    this.inputTypes = [
        'number',
        'text'
    ];

    this.addToForm = function(options) {
        /*
        // options {
        //     element
        //     type
        // }
        */

        Form.maxComponent > Form.components.length && Form.components.push(options);
    };
}).

controller('MainCtrl', function(
    Form
){
    this.Form = Form;
});

'use strict';

angular.module('angularDemoFormbuilderApp').

controller('AsideCtrl', function(
    Form
){
    this.inputTypes = [
        'button',
        'checkbox',
        'color',
        'date',
        'datetime',
        'datetime-local',
        'email',
        'file',
        'hidden',
        'image',
        'month',
        'number',
        'password',
        'radio',
        'range',
        'reset',
        'search',
        'submit',
        'tel',
        'text',
        'time',
        'url',
        'week'
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

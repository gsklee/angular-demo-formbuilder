'use strict';

angular.module('angularDemoFormbuilderApp').

controller('AsideCtrl', function(
    Form
){
    this.Form = Form;

    this.navs = [{
        text: 'Add Component',
        state: 'main.add'
    }, {
        text: 'Edit Component',
        state: 'main.editComponent({componentId: 0})'
    }, {
        text: 'Edit Form',
        state: 'main.editForm'
    }];

    this.inputTypes = [
        'number',
        'text'
    ];

    this.addToForm = function(options) {
        /*
        // options {
        //     element
        //     label
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

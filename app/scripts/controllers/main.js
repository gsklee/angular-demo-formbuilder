'use strict';

angular.module('angularDemoFormbuilderApp').

controller('MainCtrl', function(
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
        //     type
        // }
        */

        Form.components.isFull() || Form.components.push(options);
    };
});

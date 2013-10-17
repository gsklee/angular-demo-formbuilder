'use strict';

var expect = chai.expect;

describe('Service: Form', function () {
    var $httpBackend,
        Form;

    beforeEach(module('angularDemoFormbuilderApp'));

    beforeEach(inject(function(
        $templateCache,
        _$httpBackend_,
        _Form_
    ){
        $templateCache.put('views/main.html', '<template></template>');
        $templateCache.put('views/main.add.html', '<template></template>');

        $httpBackend = _$httpBackend_;
        Form = _Form_;

        $httpBackend.whenGET('http://gsklee.apiary.io/form').respond({
            title: 'Party Invitation',
            description: 'Move your lazy butts and come!'
        });
    }));

    it('should have a list of navigation tabs', function() {
        $httpBackend.flush();

        expect(Form.title).to.equal('Party Invitation');
    });
});

'use strict';

var expect = chai.expect;

describe('Controller: MainCtrl', function () {
    var scope,
        MainCtrl;

    beforeEach(module('angularDemoFormbuilderApp'));

    beforeEach(inject(function(
        $rootScope,
        $controller
    ){
        scope = $rootScope.$new();

        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    it('should have a list of navigation tabs', function() {
        expect(MainCtrl.navs).to.have.length(3);
    });
});

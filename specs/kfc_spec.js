(function() {
    'use strict';
    var scope;

    beforeEach(inject(createController));

    function createController($rootScope, $controller) {
        scope = $rootScope.$new();
        $controller('KFCController', {scope:scope});
    }

    describe('KFCController', function() {
        it('should make nom nom sounds when eat', function() {
            expect(scope.eat()).toBe('nom nom');
        });
    });
})();

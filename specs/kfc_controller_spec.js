(function() {
    'use strict';
    var scope;

    beforeEach(inject(createController));

    function createController($rootScope, $controller) {
        scope = $rootScope.$new();
        $controller('KFCController', {scope:scope});
    }

    describe('KFCController', function() {
        it('should make nom nom sounds when eat egg tart', function() {
            expect(scope.eat('egg tart')).toBe('nom nom');
        });

        it('should make yum!! sounds when eat icecream', function() {
            expect(scope.eat('icecream')).toBe('yum!!');
        });

        it('should make crunch!! sounds when eat fried chicken', function() {
            expect(scope.eat('fried chicken')).toBe('crunch!!');
        });
    });
})();

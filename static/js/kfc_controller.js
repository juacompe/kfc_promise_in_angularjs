function KFCController(scope) {
    'use strict';

    scope.eat = function(food) {
        var sounds = {
            'icecream': 'yum!!',
            'fried chicken': 'crunch!!',
            'egg tart': 'nom nom',
        };
        return sounds[food];
    };
}


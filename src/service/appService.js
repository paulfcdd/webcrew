'use strict';

angular
    .module('webcrew')
    .service('menuItemsList', ['$q', menuItemsList]);

function menuItemsList($q) {
    var items = [
        {
            name: 'услуги',
            id: 'services'
        },
        {
            name: 'о нас',
            id: 'about'
        },
        {
            name: 'контакты',
            id: 'contacts'
        }


    ];

    // Promise-based API
    return {
        loadAllItems: function () {
            // Simulate async nature of real remote calls
            return $q.when(items);
        }
    };
}

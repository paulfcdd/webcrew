'use strict';

angular

    .module('webcrew', [
        'ngRoute',
        'ngMaterial'
    ])

    .config(['$routeProvider', function ($routeProvider) {

    }])

    .run(['$anchorScroll', function($anchorScroll) {
        $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
    }])


    .controller('AppCtrl', function AppCtrl($scope) {
    })

    .controller('contentCtrl', function contentCtrl($scope, menuItemsList, servicesItemsList, contactOptions) {
        $scope.items = [];

        $scope.cItems = [];

        $scope.options = [];

        menuItemsList
            .loadAllItems()
            .then(function (items) {
                $scope.items = [].concat(items);
            });

        $scope.loadBlock = function(itemid) {
            return $scope.tpl = 'src/tpl/'+itemid+'.tpl.html';
        };

        servicesItemsList
            .loadAllCItems()
            .then(function (cItems) {
                $scope.cItems = [].concat(cItems);
            });

        contactOptions
            .loadAllContacts()
            .then(function(options) {
                $scope.options = [].concat(options);
            })
    })

    .controller('headerCtrl', function headerCtrl($scope, menuItemsList, $anchorScroll, $location) {
        $scope.items = [];

        menuItemsList
            .loadAllItems()
            .then(function (items) {
                $scope.items = [].concat(items);
            });


        $scope.goToSection = function(itemid) {

            var newHash = itemid;

            if ($location.hash() !== newHash) {
                // set the $location.hash to `newHash` and
                // $anchorScroll will automatically scroll to it
                $location.hash(newHash);
            } else {
                // call $anchorScroll() eitemidplicitly,
                // since $location.hash hasn't changed
                $anchorScroll();
            }
        }

    });
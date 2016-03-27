'use strict';

angular

    .module('webcrew', [
        'ngRoute',
        'ngMaterial'
    ])

    .config(['$routeProvider', '$compileProvider', function ($routeProvider, $compileProvider) {
        $compileProvider
            .aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|skype):/);

    }])

    .run(['$anchorScroll', function ($anchorScroll) {
        $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
    }])


    .controller('AppCtrl', function AppCtrl($scope) {
    })

    .controller('contactCtrl', function contactCtrl($scope, $http) {
        $scope.sendForm = function (clientName, companyName, clientEmail, clientPhone, projDescr) {

            $http.post(
                'src/mailSend.php', {
                    clientName: clientName,
                    companyName: companyName,
                    clientEmail: clientEmail,
                    clientPhone: clientPhone,
                    projDescr: projDescr
                }).success(function (data) {
                    window.console.log(data);
                }).error(function (status) {
                    window.console.log('Error with status ' + status);
                });
            //window.alert(clientName+', '+companyName+', '+clientEmail+', '+clientPhone+', '+projDescr);

        };
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

        $scope.loadBlock = function (itemid) {
            return $scope.tpl = 'src/tpl/' + itemid + '.tpl.html';
        };

        servicesItemsList
            .loadAllCItems()
            .then(function (cItems) {
                $scope.cItems = [].concat(cItems);
            });

        contactOptions
            .loadAllContacts()
            .then(function (options) {
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


        $scope.goToSection = function (itemid) {

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
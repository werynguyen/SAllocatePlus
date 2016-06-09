﻿(function () {
    'use strict';

    angular.module('tna.sap.services', ['wn.ajax-helper']);
    angular.module('tna.sap.controllers', ['tna.sap.services']);


    angular
        .module('staffApp', ['ngRoute', 'wn.ajax-helper',
            'tna.sap.controllers', 'tna.sap.services', 'ui.bootstrap', 'mgcrea.ngStrap'])
        .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
            $routeProvider.when('/', {
                templateUrl: '/AppJs/templates/jobList.html',
                controller: 'jobListCtrl',
                controllerAs: 'jl'
            }).when('/create', {
                templateUrl: '/AppJs/templates/detail.html',
                controller: 'jobDetailCtrl'
            }).when('/edit', {
                templateUrl: '/AppJs/templates/jobDetail.html',
                controller: 'jobDetailCtrl'
            })

            .otherwise({
                redirectTo: '/'
            });

            $httpProvider.interceptors.push(function () {
                return {
                    'response': function (response) {
                        if (response.status == 401) {
                            window.location.href = "~/Home/Login";
                        }

                        if (response.data.hasOwnProperty('d')) {
                            if (typeof (response.data.d) == "string") {
                                response.data.d = response.data.d.replace(/"\\\/(Date\([0-9-]+\))\\\/"/gi, 'new $1');
                                response.data = eval('(' + response.data.d + ')');
                            }

                            response.data = response.data.d;
                        }
                        return response;
                    }
                }
            });
        }])
    .run(['$rootScope', function ($rootScope) {
        $rootScope.AppTitle = 'Job App';
    }])
    .filter('date', function () {
        return function (dateData) {
            return moment(dateData).format('Y-MM-DD');
        }
    })
    .filter('time', function () {
        return function (timeData) {
            if (timeData.length == 8) {
                return timeData.substr(0, 5);
            }
            return timeData;
        }
    })
    ;

})();
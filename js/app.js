var telephoneDirectoryApp = angular.module('telephoneDirectoryApp', [
    'ngRoute',
    'telephoneDirectoryControllers'
]);

telephoneDirectoryApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/homePage', {
                templateUrl: 'views/homePage.html',
                controller: 'telephoneDirectoryCtrl'
            }).
            when('/newContact', {
                templateUrl: 'views/newContact.html',
                controller: 'telephoneDirectoryCtrl'
            }).
            otherwise({
                redirectTo: '/homePage'
            })
    }]);

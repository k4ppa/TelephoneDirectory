var telephoneDirectoryApp = angular.module('telephoneDirectoryApp', [
    'ngRoute',
    'telephoneDirectoryControllers'
]);

telephoneDirectoryApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            //when('/newContact', {
            //    templateUrl: 'views/newContact.html',
            //    controller: 'newContactCtrl'
            //}).
            when('/homePage', {
                templateUrl: 'views/homePage.html'
                //controller: 'homePageCtrl'
            }).
            otherwise({
                redirectTo: '/homePage'
            })
    }]);

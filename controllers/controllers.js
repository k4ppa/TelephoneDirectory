var telephoneDirectoryControllers = angular.module('telephoneDirectoryControllers', []);

telephoneDirectoryControllers.controller('telephoneDirectoryCtrl', function ($scope) {
    $scope.newFirstName = '';
    $scope.newLastName = '';
    $scope.newPhoneNumber = '';

    $scope.contacts = [
        {'firstName': 'Mattia',
            'lastName': 'Cappa',
            'phoneNumber': '+39 335 1411077'}
    ];

    $scope.createContact = function() {
        var contact = {
            'firstName': $scope.newFirstName,
            'lastName': $scope.newLastName,
            'phoneNumber': $scope.newPhoneNumber};

        $scope.contacts.push(contact);

        $scope.newFirstName = '';
        $scope.newLastName = '';
        $scope.newPhoneNumber = '';
    }
});

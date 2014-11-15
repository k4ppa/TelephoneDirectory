var telephoneDirectoryControllers = angular.module('telephoneDirectoryControllers', []);

telephoneDirectoryControllers.constant("baseUrl", "http://localhost:2403/contacts/")
    .controller('telephoneDirectoryCtrl', function ($scope, $http, baseUrl) {
    $scope.newFirstName = '';
    $scope.newLastName = '';
    $scope.newPhoneNumber = '';
    $scope.contacts = [{}];

    $scope.createContact = function (newContact) {
        $http.post(baseUrl, newContact).success(function (newContact) {
            $scope.contacts.push(newContact);
        });
    };

    $scope.insertNewContact = function() {
        var newContact = {
            'firstName': $scope.newFirstName,
            'lastName': $scope.newLastName,
            'phoneNumber': $scope.newPhoneNumber};

        $scope.createContact(newContact);

        $scope.newFirstName = '';
        $scope.newLastName = '';
        $scope.newPhoneNumber = '';
    }
});



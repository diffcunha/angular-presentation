function ContactListController($scope, contacts) {
  $scope.contacts = contacts;
}

angular
  .module('angular-addressbook')
  .controller('ContactListController', ContactListController);

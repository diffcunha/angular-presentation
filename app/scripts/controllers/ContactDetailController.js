function ContactDetailController($scope, contact, ContactService) {
  $scope.contact = contact;
  $scope.editable = contact.id ? false : true;

  $scope.edit = function() {
  	$scope.editable = true;
  };

  $scope.save = function() {
  	$scope.contact = ContactService.save($scope.contact)
  	$scope.editable = false;
  };

  $scope.reset = function() {
  	$scope.contact = ContactService.get(contact.id)
  	$scope.editable = false;
  };
}

angular
  .module('angular-addressbook')
  .controller('ContactDetailController', ContactDetailController);

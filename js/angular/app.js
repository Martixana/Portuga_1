var myApp = angular.module('myApp', []);

myApp.controller('RegistrationController', ['$scope', function($scope)
{

	$scope.register = function(){
		$scope.message = $scope.guest.firstname + ", your reservation for a party of " + $scope.guest.number + " has been made. Thank you."
	}
}])
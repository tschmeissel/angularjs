(function() {
	'use strict';
	
	angular
		.module('myApp')
		.controller('UserController', UserController);

	UserController.$inject = ['$log'];
		
	function UserController($log) {
		var vm = this; // vm = view model
		
		vm.firstName = 'John';
		vm.lastName = 'Doe';
		vm.city = 'Nashville';
		
		vm.getAddress = getAddress;
		
		function getAddress() {
			return getFullName() + ', ' + vm.city;
		}
		
		function getFullName() {
			var fullUserName = vm.firstName + ' ' + vm.lastName;
			$log.debug("provide full user name: %s", fullUserName); 
			return fullUserName;
		};
	}
})();
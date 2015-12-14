(function() {
	'use strict'

	// controller calling the dataservice factory
	angular
		.module('app')
		.controller('Avengers', Avengers);
		
	Avengers.$inject = ['dataservice', '$log'];

	function Avengers(dataservice, logger) {
		var vm = this;
		vm.avengers = [];

		activate();

		function activate() {
			return getAvengers().then(function() {
				logger.info('Activated Avengers View');
			});
		}

		function getAvengers() {
			return dataservice.getAvengers()
				.then(function(data) {
					vm.avengers = data;
					return vm.avengers;
				});
		}
	}	
})();
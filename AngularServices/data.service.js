(function() {
	'use strict'

angular
    .module('app')
    .factory('dataservice', dataservice);
	
	dataservice.$inject = ['$log', '$q'];
	
	function dataservice($log, $q) {
		return {
			getAvengers: getAvengers
		};

		function getAvengers() {
			$log.info('get avengers');
			var result = ['peter', 'hansen'];
			return $q.when(result);
		}
	}
})();
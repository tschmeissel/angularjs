(function() {
	'use strict';
	
	angular
		.module('myApp')
		.factory('someFactory', someFactory);

	function someFactory() { }
})();
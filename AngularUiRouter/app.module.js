(function() {
	'use strict'
	
	var app = angular.module('cookbookApp', [
		'ui.router',
		'categories',
		'categories.recipes'
	]);
	
	app.config(function($logProvider) {
		 $logProvider.debugEnabled(true);
	});
	
	app.config(function($stateProvider, $urlRouterProvider) {
		
		$stateProvider
			.state('cookbook', {
				url: '',
				abstract: true
			})
		
		$urlRouterProvider.otherwise('/');
	});
	
})();
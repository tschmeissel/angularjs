(function() {
	'use strict'
	
	var app = angular.module('myApp', ['ui.router']);
	
	app.config(function($logProvider) {
		 $logProvider.debugEnabled(true);
	});
	
	app.config(function($stateProvider, $urlRouterProvider) {
		
		$urlRouterProvider.otherwise('/home');
		
		$stateProvider
        
			// HOME STATES AND NESTED VIEWS ========================================
			.state('home', {
				url: '/home',
				templateUrl: 'partial-home.html'
			})
			
			// ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
			.state('about', {
				// we'll get to this in a bit       
		});		
	});
	
})();
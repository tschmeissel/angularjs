(function() {
	'use strict'
	
	var app = angular.module('categories', []);
	
	app.config(function($stateProvider) {
		$stateProvider
			.state('cookbook.categories', {
				url: '/',
				views: {
					'categories@': {
						controller: 'CategoriesCtrl',
						templateUrl: 'app/categories/categories.tmpl.html'
					}
				}
			})
	})
	
	app.controller('CategoriesCtrl', function CategoriesCtrl($scope) {
	})
})();
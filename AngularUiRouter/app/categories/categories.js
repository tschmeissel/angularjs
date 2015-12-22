(function() {
	'use strict'
	
	var categories = angular.module('categories', []);
	
	categories.config(function($stateProvider) {

		$stateProvider
			.state('cookbook.categories', {
				url: '/',
				views: {
					'categories@': {
						controller: 'CategoriesCtrl',
						templateUrl: 'app/categories/categories.tmpl.html'
					},
					'recipes@': {
						controller: 'RecipesCtrl',
						templateUrl: 'app/categories/recipes/recipes.tmpl.html'
					}
				}
			})
	})
	
	categories.controller('CategoriesCtrl', function CategoriesCtrl($scope) {
	})
	
})();
(function() {
	'use strict'
	
	var categories = angular.module('categories', []);
	
	categories.config(function($stateProvider) {

		$stateProvider
			.state('cookbook.categories', {
				url: '/',
				// this state cotains these two views
				views: {
					// the '@' marks it as an absolute path
					// meaning it targets this named view with any unamend state
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
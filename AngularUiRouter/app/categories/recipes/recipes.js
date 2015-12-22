(function() {
	'use strict'
	
	var recipes = angular.module('categories.recipes', []);
	
	recipes.config(function($stateProvider) {
		
		$stateProvider
			.state('cookbook.categories.recipes', {
				url: 'categories/:category',
				views: {
					'recipes@': {
						templateUrl: 'app/categories/recipes/recipes.tmpl.html',
						controller: 'RecipesCtrl'
					}
				}
			})
	})
	
	recipes.controller('RecipesCtrl', function($scope, $stateParams, $log) {
		$scope.currentCategoryName = $stateParams.category;
		$log.debug('current category: ' + $scope.currentCategoryName);
	})
	
})();
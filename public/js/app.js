var root = angular.module("root", ['ngRoute', 'ngResource', 'ngSanitize', 'ui.bootstrap']);

root.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', { templateUrl: 'partials/loginform.html', controller: 'loginController'});
	$routeProvider.when('/home', { templateUrl: 'partials/home.html', controller: 'homeController'});
	$routeProvider.otherwise({redirectTo: '/'});
}])

.config(['$httpProvider', function($httpProvider){
	var interceptor = function($rootScope, $location, $q, Flash){
		
		var success = function(response){
			return response;
		}

		var error = function(response){
			if(response.status === 401){
				delete sessionStorage.authenticated;
				$location.path('/');
				Flash.show(response.data.flash);
			}
			return $q.reject(response);
		}

		return function(promise){
			return promise.then(success, error);
		}
	}

	$httpProvider.responseInterceptors.push(interceptor);
}])
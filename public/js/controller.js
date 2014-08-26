angular.module("root").controller('loginController', ["$scope", "$sanitize", "$location", "Authenticate", "Flash", "UserService",
	function($scope, $sanitize, $location, Authenticate, Flash, UserService){
	
	$scope.login = function(){

		var credentials = {
			'email': $sanitize($scope.email),
			'password': $sanitize($scope.password)
		};

		Authenticate.authenticateCredentials(credentials).success(function(response, status){
			Flash.clear();
			$location.path('/home');
			sessionStorage.authenticated = true;
			UserService.id = response.user.id;
			UserService.email = response.user.email;
			console.log(response);
		}).error(function(response, status){
			console.log(response);
			console.log(status);
			Flash.show(response.data.flash);
		})
	}
}])

.controller('homeController', ["$scope", "$location", "Authenticate", "Flash", "Events", "UserService",
	function($scope, $location, Authenticate, Flash, Events, UserService){
	
	if (!sessionStorage.authenticated){
            $location.path('/');
    }
	
	$scope.logout = function(){
		Authenticate.logout().success(function(){
			$location.path('/');
			delete sessionStorage.authenticated;
			
		});
	}

	$scope.createEvent = function(){
		var eventInfo = {
			'name': $scope.name,
			'comment': $scope.comment,
			'date': $scope.date,
			'time': $scope.timeof,
			'location': $scope.location,
			'user_id': UserService.id
		};

	Events.createUserEvent(eventInfo)
		.success(function(response, status){
			$scope.userEvents.push(eventInfo);
		})
		.error(function(response, status){
			console.log("Fel");
			console.log(status);
		})
	}

	Events.getUserEvents(UserService.id)
		.success(function(response, status){
			$scope.userEvents = response.appointments;
		})
	
	$scope.username = UserService.email;


}]);
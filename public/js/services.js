angular.module('root')
	.factory('Authenticate', function($http){
		return {
			authenticateCredentials: function(credentials){
				return $http.post("http://localhost/disksignup/public/service/authenticate", credentials);
			},
			logout: function(){
				return $http.get("http://localhost/disksignup/public/service/authenticate");
			}
		};
	})
	
	.factory('Flash', function($rootScope){
        return {
            show: function(message){
                $rootScope.flash = message;
            },
            clear: function(){
                $rootScope.flash = "";
            }
        }
    })
     
    .factory('Events', function($http){
    	return {
    		getUserEvents: function(id){
    			return $http.get("/disksignup/public/service/events/" + id);
    		},
    		getSignups: function(id){
    			return $http.get("urltilldetta" + id);
    		},
    		createUserEvent: function(info){
    			return $http.post("/disksignup/public/service/events", info);
    		}
    	}
    })

    .factory('UserService', function(){
    	var userInfo = {
    		id: null,
    		email: ""
    	}

    	return userInfo;
    })
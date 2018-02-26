function ApiService($http) {

	this.http = $http;
	this.BASE_URL = 'https://localhost:8042';
}

angular.module('mathApp').service('api', ApiService);

ApiService.prototype.simplifyExpression = function() {

	var self = this;

	return self.http.get(self.BASE_URL + '/')
	.then(function(response) {
		console.log("successful dribble call")
		return response.data;
	})
	.catch(function(response) {
		console.log("unsuccessful dribble call")
		return response.data;
	}); 
};

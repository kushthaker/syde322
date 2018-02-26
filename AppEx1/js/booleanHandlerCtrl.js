function booleanHandlerCtrl(api, $location) {

	this.api = api;
	this.location = $location;   
	this.str = "";


	console.log('sakjdf')
}

angular.module('mathApp').controller('booleanHandlerCtrl', booleanHandlerCtrl);

// Rules Supported
// 1. A + 0 = A
// 2. A.0 = 0 
// 3. A + 1 = 1
// 4. A.1 = A
// 5. A.A = A

booleanHandlerCtrl.prototype.readInput = function() {

	console.log(str)
	console.log('readInput() works')

	var expression = this.str;

	if(!str){
		console.log('error');
	} else {
		self.api.simplifyExpression(expression).then(function(data) {
			response = JSON.parse(data);
		});
	}
}

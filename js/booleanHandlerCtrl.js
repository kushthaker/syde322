function booleanHandlerCtrl($location) {

	var self = this;

	self.location = $location;   
	self.searchQuery = "";


	self.str = "";

}

angular.module('mathApp').controller('booleanHandlerCtrl', booleanHandlerCtrl);

// Rules Supported
// 1. A + 0 = A
// 2. A.0 = 0 
// 3. A + 1 = 1
// 4. A.1 = A
// 5. A.A = A

booleanHandlerCtrl.prototype.readInput = function() {

	str = this.str.trim()

	// Check for errors
	// check for even number of brackets
	// check for invalid characters

	// if error
	// this.error_message = "Check to make sure you have even brackets!"
	// this.error_message = "Check to make sure you have even brackets!"

}


booleanHandlerCtrl.prototype.simplifyExpression = function() {

	

}

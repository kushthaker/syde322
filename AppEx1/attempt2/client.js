function readInput() {
	var str = document.getElementById("booleanExpression").value;
	
	apiCall(str);

	// isValid(str);
}

function errorMessage(){
	//prompt user to try again
}

function isValid(str) {
	
	console.log('checking isValid')

	//remove spaces
	expression = str.trim()
	expression = str.replace(/\s+/g, '');

	//check for valid characters
	var validCharacters = new RegExp(/[~()10+.ABC]/);

	if (validCharacters.test(str) == false){
		errorMessage("Please re-enter your expression with the allowed operands");
		isValid = false;
	}

	//check for even number of brackets
	var countOfOpenBrackets = 0;
	var countOfClosedBrackets = 0;

	for (i = 0; i < str.length; i++){
		if (str.charAt(i) == '('){
			countOfOpenBrackets++;
		}
		if (str.charAt(i) == ')'){
			countOfClosedBrackets++;
		}
		if (countOfOpenBrackets !== countOfClosedBrackets){
			errorMessage("Check your brackets!");
			isValid = false;
		}
	}
}

function apiCall(str) {
	console.log("call attempted");
	console.log(str);

	// $.ajax({
	//    url: 'https://localhost:8042/',
	//    contentType: "application/json",
	//    data: {
	//       format: 'json'
	//    },
	//    error: function() {
	//       console.log('api call request error');
	//    },
	//    dataType: 'jsonp',
	//    success: function(data) {
	//    	console.log("success");
	//    	console.log(data);
	//    },
	//    type: 'GET'
	// });

	$.ajax({
	    type : "GET",
	    url : 'https://localhost:8042/',
	    dataType : "text",
	    contentType: "application/json",
	    success : function(result) {
	    	console.log('succesfful api call');
	    	console.log(result);
	    },
	    error : function(error) {
	    	console.log('fail');

	    }
	});

}




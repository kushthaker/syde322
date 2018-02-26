function readInput() {
	var str = document.getElementById("booleanExpression").value;
	console.log(str)
	apiCall(str);
}

function validateExpression(str) {
	
	//remove spaces
	expression = str.trim()

	//check for valid characters
	var validCharacters = new RegExp(/[~`!@#$%\^&*=\-\[\]\\';,/{}|\\":<>\?2-9]/);	
}

function apiCall(str) {

	$.ajax({
	   url: 'http://localhost:8042/courses',
	   data: {
	      format: 'json'
	   },
	   error: function() {
	      console.log('error');
	   },
	   dataType: 'jsonp',
	   success: function(data) {
	   	console.log(success);
	   	console.log(data);
	   },
	   type: 'GET'
	});
}
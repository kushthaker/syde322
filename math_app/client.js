console.log("loaded client.js");

function getUserInput(){
	event.preventDefault(); //prevent routing away from '/' path
	$("#error").hide();	
	var input = document.getElementById("booleanExpression").value;
	if (isValid(input)){ apiCall(input); }
}

function errorMessage(message){
	//prompt user to try again
	console.log("Error identified.");
	$("#error").show();	
	$("#error").html(message);
}

function isValid(str) {

	var isValid = true; 

	//remove spaces
	expression = str.trim()
	expression = str.replace(/\s+/g, '');

	// //check for valid characters
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
		else if (str.charAt(i) == ')'){
			countOfClosedBrackets++;
		}
	} 

	console.log("open :" + countOfOpenBrackets);
	console.log("closed :" + countOfClosedBrackets);

	if (countOfOpenBrackets !== countOfClosedBrackets){
		errorMessage("Check your brackets!");
		isValid = false;
	}

	return isValid;
}

function apiCall(str) {

	console.log("attempting API call...");

	$.ajax({
		url: "/api/boolean/simplify",
		dataType: "text",
		type: "POST",
		contentType: 'application/json; charset=utf-8',
		data: JSON.stringify({ str : str })
	}).done(function(data) {
		console.log("successful API Call.")
		$("#output").html(data);
	}).fail(function( data ) {
	});

}





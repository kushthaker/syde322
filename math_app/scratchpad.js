var Console = function () {
    this.log = function(msg){ debug(msg) }; 
};
var console = new Console();

var prepareExpression = function(testExp){
	testExp = testExp.replace(/\s/g, '');
	return testExp;
}

var testExp = "A.1 + (B+0)";
testExp = prepareExpression(testExp);

// var indexOfFirstBracket = testExp.indexOf("(");

// console.log("openPos: " + indexOfFirstBracket);

// var getClosePos = function(testExp, indexOfFirstBracket){

// 	var closePos = testExp.indexOf("(");
// 	var counter = 1;

// 	console.log("initial closePos: " + closePos);
	
// 	while (counter > 0) {

// 		closePos = ++closePos;

// 		console.log("closePos in loop: " + closePos);

// 		var c = testExp.charAt(closePos);

// 		if (c == '('){
// 			counter++;
// 		} else if (c == ')'){
// 			counter--;
// 		}
// 	}

// 	return closePos;
// }

// var str = testExp.slice(indexOfFirstBracket, getClosePos(testExp, indexOfFirstBracket));


var simpleStr = "A+1"

function simplify(expression) {

    console.log(expression);

    var result = expression;
    
      for (i = 0; i < expression.length; i++) {
        var currentChar = expression.charAt(i);
        
        //checks for A + 0
        if (currentChar == '+') {
          if (expression.charAt(i - 1) == '0' )) {
            result = expression.charAt(i+1);
          }
          else if (expression.charAt(i+1) == '0') {
            result = expression.charAt(i-1);
          }
          //checks for A + A
          else if ((i != 0) && (expression.charAt(i - 1) == expression.charAt(i + 1) )) {
            result = expression.charAt(i+1);
          }
          //checks for A + 1
          else if ((i != 0) && (expression.charAt(i - 1) == '1' )) {
            result = '1';
          }
          else if (expression.charAt(i+1) == '1') {
            result = '1';
          }
        }
        
        if (currentChar == '.') {
        //checks for A.1
          if ((i != 0) && (expression.charAt(i - 1) == '1' )) {
            result = expression.charAt(i+1);
          }
          else if (expression.charAt(i+1) == '1') {
            result = expression.charAt(i-1);
          }
          //checks for A.0
          else if ((i != 0) && (expression.charAt(i - 1) == '0' )) {
            result = '0';
          }
          else if (expression.charAt(i+1) == '0') {
            result = '0';
          }
          
          //checks for A.A
          else if ((i != 0) && (expression.charAt(i - 1) == expression.charAt(i + 1) )) {
            result = expression.charAt(i+1);
          }
        }

        if (currentChar == '~'){
          //checks for X + ~X = 1
          if ((i - 1 == '+') && ((i-2)==(i+1))){
            result = 1;
          }
          // checks for X.~X = 0
          if ((i - 1 == '.') && ((i-2)==(i+1))){
            result = 0;
          }

        }
      }
    
    return res.status(200).json({"expression":expression.result});

    }










// if (){ (str.includes('(')))
// while(str.includes('(')){
// 	console.log(str);
// 	var indexOfFirstBracket = str.indexOf('(');
// 	console.log("newindex: "+indexOfFirstBracket);
// 	str = str.slice(indexOfFirstBracket,getClosePos(str,indexOfFirstBracket));
// }














// public int findClosingParen(char[] text, int openPos) {
//     int closePos = openPos;
//     int counter = 1;
//     while (counter > 0) {
//         char c = text[++closePos];
//         if (c == '(') {
//             counter++;
//         }
//         else if (c == ')') {
//             counter--;
//         }
//     }
//     return closePos;
// }
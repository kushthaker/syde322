// Implement following rules:

// X + 0 = X
// X1 = X
// X + 1 = 1
// X0 = 0
// X + X = X
// XX = X
// X + ~X = 1
// X~X = 0
// X(Y + Z) = XY + XZ
// X + YZ = (X+Y)(X+Z)
// X + XY = X
// X(X + Y) = X
// XY + X~Y = X
// (X+Y)(X+~Y) = X


//should simplify to 1
var str = "A + ~A(A + 0)"


function validateInput(str) {

	var expression = str.trim();
	console.log(str);

	

}


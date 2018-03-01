/* 
PROVIDED IN THE CONTEXT OF SYDE 322 SOFTWARE DESIGN

SAMPLE JAVASCRIPT CODE THAT ILLUSTRATES CREATION OF
BASE FUNCTIONALITY FOR A SIMPLE, GENERIC 
REST-BASED WEB SERVICE USING NODE.JS AND EXPRESS.JS.

ALL PROGRAMS CONTAINED HEREIN ARE PROVIDED TO YOU “AS IS” 
WITHOUT ANY WARRANTIES OF ANY KIND. THE IMPLIED WARRANTIES 
OF NON-INFRINGEMENT, MERCHANTABILITY AND FITNESS FOR A 
PARTICULAR PURPOSE ARE EXPRESSLY DISCLAIMED.   
*/

/* 
SETUP INSTRUCTIONS
Install the following for your platform:
- Node.js (https://nodejs.org/en/download/),
- Visual Studio Code (https://code.visualstudio.com/download) or a similar JavaScript editor,
- Chrome Web Browser (https://www.google.com/chrome/), and
- Advanced REST Client (ARC) for Chrome (http://bit.ly/K5yopu) or a similar REST Client.

To test that Node was installed correctly, run "node --version" from command line (with Admin privileges if needed). 
To exit Node prompt, type ".exit" with no quotation marks. 

Once Node is running correctly, install needed dependencies:
- npm install express
- npm install body-parser

courses.json:
{"syde322":{"name":"Software Design",
"description":"Software requirements specification; software architecture; design patterns; software testing and quality assurance; software maintenance; design of efficient algorithms and methods for their analysis, mathematical algorithms, string processing algorithms, geometrical algorithms, exhaustive search and traversal techniques, introduction to lower bound theory and NP-completeness. Case studies and engineering examples.",
"prereq":"CS 240 or ECE 250 or MTE 140 or SYDE 223 or Level at least 3B Systems Design Engineering.","antireq":""}
*/

var express = require('express'); 
var bodyParser = require('body-parser');
var fs = require("fs");
var app = express();
app.use(bodyParser.json());

// purpose: sets up a server listener at port 8042
var server = app.listen(8042, function () {
  var port = server.address().port
  console.log("Node.js server running at localhost:%s", port)
})

// GET method route
app.get('/', (req, res) => { //anonymous function
  console.log("GET request received for /");
  res.sendFile(__dirname + './index.html');
})


// // purpose: handles GET requests for '/' path
// app.get('/', (req, res) => { // anonymous function
//   res.render()
//   console.log("GET request received for /");
//   res.status(200).json({ "message": "Welcome to SYDE 322 REST-based web service", "links": {"rel" : "courses", "href" : "http://localhost:8042/courses"}});
// })

// // purpose: handles GET requests for '/courses' path
// app.get('/courses', (req, res) => { // anonymous function
//     console.log("GET request received for /courses");
//     fs.readFile(__dirname + "/" + "courses.json", 'utf8', function (err, data) { // using function construct
//     if (err && err.code == "ENOENT") { // anonymous callback function
//       console.error("Invalid filename provided");
//       return;
//     }
//     res.end(data); // send results back as HTTP response
//   });
// })

// // purpose: handles GET requests for '/courses/id' path
// app.get('/courses/:id', (req, res) => { // anonymous function
//   console.log("GET request received for /courses/%s", req.params.id);
//   fs.readFile(__dirname + "/" + "courses.json", 'utf8', function (err, data) { // using function construct
//     if (err && err.code == "ENOENT") { // anonymous callback function
//       console.error("Invalid filename provided");
//       return;
//     }
//     try {  
//       var courses = JSON.parse(data); // get JSON data from the file
//       var course = courses[req.params.id]; // get instance data based on entered ID
//       if (course == undefined) // check if specified ID can be found
//         res.status(404).json({ error: "Course code is undefined" });
//       res.end(JSON.stringify(course));  // send instance data back as HTTP response

//     } catch (err) {
//       res.status(400).json({ error: "Invalid service request" });
//       console.error("Invalid service request");
//       return;
//     }          
//   });
// })

// /* purpose: handles POST requests for '/courses' path
//    test: submit new data item from the client; sample item included below

//  {"syde192" : {"name" : "Digital Systems Updated", "description" : "Digital technology, combinatorial logic, binary arithmetic, synchronous sequential circuits, design methodology, algorithmic state machines, microcomputer interfacing.",
//   "prereq" : "1B Systems Design Engineering", "antireq": ""}}
// */
// app.post('/courses', (req, res) => { // anonymous function
//   console.log("POST request received for /courses");
//   fs.readFile(__dirname + "/" + "courses.json", 'utf8', function (err, data) { // using function construct
//     if (err && err.code == "ENOENT") { // anonymous callback function
//       console.error("Invalid filename provided");
//       return;
//     }   
//     try {  
//       var courses = JSON.parse(data); // get JSON data from the file
//       var newCourse = req.body; // get JSON data from HTTP request
//       courses = Object.assign(courses, newCourse); // combine the results
//       var jsonText = JSON.stringify(courses); // get JSON response as text
//       res.end(jsonText); // send results back as HTTP response
//       fs.writeFileSync(__dirname + "/" + "courses.json", jsonText); 

//     } catch (err) {
//       res.status(400).json({ error: "Invalid service request" });
//       console.error("Invalid service request");
//       return;
//     }      
//   });  
// })

// // sample data item used for internal storage
// var newCourseDemo = {
//   "bme393" : {
//     "name" : "Digital Systems",
//   "description" : "Digital technology, combinatorial logic, binary arithmetic, sequential circuits, digital design, and microcontrollers. Topics will be reinforced in the context of biomedical microcontrollers and sensors used in physiological monitoring and clinical support systems.",
//   "prereq" : "Level at least 3A Biomedical Engineering.",
//   "antireq": "BME 292, SYDE 192"
//  }
// }

// /* purpose: handles POST requests for '/coursesDemo' path
//    test: store the new data item stored internally; see sample item above
// */
// app.post('/coursesDemo', (req, res) => { // anonymous function
//     console.log("POST request received for /coursesDemo");
//     fs.readFile(__dirname + "/" + "courses.json", 'utf8', function (err, data) { // using function construct
//       if (err && err.code == "ENOENT") { // anonymous callback function
//         console.error("Invalid filename provided");
//         return;
//       }
//       try {    
//         var obj = JSON.parse(data); // get JSON data from the file
//         obj["bme393"] = newCourseDemo["bme393"]; // get JSON data from internal object
//         var jsonText = JSON.stringify(obj); // get JSON response as text
//         res.end(jsonText); // send results back as HTTP response
//         fs.writeFileSync(__dirname + "/" + "courses.json", jsonText); // uncomment to update json file

//       } catch (err) {
//         res.status(400).json({ error: "Invalid service request" });
//         console.error("Invalid service request");
//         return;
//       }
//   });  
// })

// /* purpose: handles PUT requests for '/courses/id' path
//    test: submit updated data item from the client; sample item included below

//  {"syde192" : {"name" : "Digital Systems Updated", "description" : "Digital technology, combinatorial logic, binary arithmetic, synchronous sequential circuits, design methodology, algorithmic state machines, microcomputer interfacing.",
//   "prereq" : "1B Systems Design Engineering", "antireq": ""}}
// */
// app.put('/courses/:id', (req, res) => { // anonymous function
//   console.log("PUT request received for %s", req.params.id);
//   fs.readFile(__dirname + "/" + "courses.json", 'utf8', function (err, data) { // using function construct
//     if (err && err.code == "ENOENT") { // anonymous callback function
//       console.error("Invalid filename provided");
//       return;
//     }
//     try {  
//       var courses = JSON.parse(data); // get JSON data from the file
//       var newCourse = req.body; // get JSON data from HTTP request
//       for (var val in newCourse) {
//         var course = courses[val];
//         if (val == req.params.id && course != undefined)
//           courses[req.params.id] = newCourse[val]; // update instance data if IDs match
//       }
//       var jsonText = JSON.stringify(courses); // get JSON response as text
//       fs.writeFileSync(__dirname + "/" + "courses.json", jsonText); // uncomment to update json file
//       res.end(jsonText); // send results back as HTTP response          

//     } catch (err) {
//       res.status(400).json({ error: "Invalid service request" });
//       console.error("Invalid service request");
//       return;
//     }     
//   });
// })

// // purpose: handles DELETE requests for '/courses/id' path
// // test: apply DELETE on syde192 and bme393 instances to restore back to initial state
// app.delete('/courses/:id', (req, res) => { // anonymous function
//   console.log("DELETE request received for %s", req.params.id);
//   fs.readFile(__dirname + "/" + "courses.json", 'utf8', function (err, data) { // using function construct
//     if (err && err.code == "ENOENT") { // anonymous callback function
//       console.error("Invalid filename provided");
//       return;
//     }
//     try {  
//       var courses = JSON.parse(data); // get JSON data from the file
//       delete courses[req.params.id]; // delete instance data based on selected ID 
//       var jsonText = JSON.stringify(courses); // get JSON response as text
//       res.end(jsonText); // send results back as HTTP response
//       fs.writeFileSync(__dirname + "/" + "courses.json", jsonText); // uncomment to update json file

//     } catch (err) {
//       res.status(400).json({ error: "Invalid service request" });
//       console.error("Invalid service request");
//       return;
//     }     
//   });
// })


// // =================================================================================
// // 3 BOOLEAN ALGEBRA ENDPOINTS - INTERPRET, SIMPLIFY, REINSTATE
// // =================================================================================

// // purpose: handles GET requests for '/api/boolean/simplify:expression' path
// // endpoint applies the following rules
// // X + 0 = X
// // X.1 = X
// // X + 1 = 1
// // X.0 = 0
// // X + X = X
// // X.X = X
// // X + ~X = 1
// // X.~X = 0

// app.get('/api/boolean/simplify/', (req, res) => { // anonymous function
//   console.log("GET request received for /api/boolean/simplify/", req.params.expression);

//   var expression = req.params.expression;

//   function simplify(expression) {

//     console.log(expression);

//     var result = expression;
    
//       for (i = 0; i < expression.length; i++) {
//         var currentChar = expression.charAt(i);
        
//         //checks for A + 0
//         if (currentChar == '+') {
//           if ((i != 0) && (expression.charAt(i - 1) == '0' )) {
//             result = expression.charAt(i+1);
//           }
//           else if (expression.charAt(i+1) == '0') {
//             result = expression.charAt(i-1);
//           }
//           //checks for A + A
//           else if ((i != 0) && (expression.charAt(i - 1) == expression.charAt(i + 1) )) {
//             result = expression.charAt(i+1);
//           }
//           //checks for A + 1
//           else if ((i != 0) && (expression.charAt(i - 1) == '1' )) {
//             result = '1';
//           }
//           else if (expression.charAt(i+1) == '1') {
//             result = '1';
//           }
//         }
        
//         if (currentChar == '.') {
//         //checks for A.1
//           if ((i != 0) && (expression.charAt(i - 1) == '1' )) {
//             result = expression.charAt(i+1);
//           }
//           else if (expression.charAt(i+1) == '1') {
//             result = expression.charAt(i-1);
//           }
//           //checks for A.0
//           else if ((i != 0) && (expression.charAt(i - 1) == '0' )) {
//             result = '0';
//           }
//           else if (expression.charAt(i+1) == '0') {
//             result = '0';
//           }
          
//           //checks for A.A
//           else if ((i != 0) && (expression.charAt(i - 1) == expression.charAt(i + 1) )) {
//             result = expression.charAt(i+1);
//           }
//         }

//         if (currentChar == '~'){
//           //checks for X + ~X = 1
//           if ((i - 1 == '+') && ((i-2)==(i+1))){
//             result = 1;
//           }
//           // checks for X.~X = 0
//           if ((i - 1 == '.') && ((i-2)==(i+1))){
//             result = 0;
//           }

//         }
//       }
    
//     return res.status(200).json({"expression":expression.result});

//     }


// })

// // purpose: handles GET requests for '/api/boolean/interpret:expression' path
// // endpoint applies the following rules
// // X(Y + Z) = XY + XZ
// // X + YZ = (X+Y)(X+Z)
// // X + XY = X
// // X(X + Y) = X
// // XY + X~Y = X
// // (X+Y)(X+~Y) = X

// app.get('/api/boolean/interpret/:expression', (req, res) => { // anonymous function
//   console.log("GET request received for /api/boolean/interpret/%s", req.params.expression);


  

// })

// // purpose: handles GET requests for '/api/boolean/previous:expression' path
// // endpoint searches for existing expression

// app.get('/api/boolean/previous/:expression', (req, res) => { // anonymous function
//   console.log("GET request received for /api/boolean/previous/%s", req.params.expression);
// })


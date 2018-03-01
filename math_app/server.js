var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();
app.use(bodyParser.json());

app.use("", express.static(__dirname + ""));

var server = app.listen(8000, function(){
  var port = server.address().port
  console.log('Node.js server running at localhost:%s', port)
})

// GET method route
app.get('/', (req, res) => { //anonymous function
  console.log("GET request received for /");
  res.sendFile(__dirname + 'index.html');
})

app.post('/api/boolean/simplify/', function (req, res) {
  var input = req.body.str;



  //parse string by mapping all variables to true and false
  //create a line of code and compile it

  res.send(JSON.stringify(input));
})
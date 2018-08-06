// WriteJsonFile.js

var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
var http = require('http');
const cors = require('cors'); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors()); 

app.post('/data', function (req, res) {
	
	var fileData = req.body.fileContent;

fs.writeFile("../nodejs/JsonFiles/testJsonFile.json", JSON.stringify(req.body) , function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
 res.status(200).end();
}); 

})


  var server = app.listen(800, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})




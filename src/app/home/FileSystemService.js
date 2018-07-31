// FileSystemService.js

var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
var http = require('http');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/data', function (req, res) {
	
	var fileData = req.body.fileContent;

fs.writeFile("C:/Users/mpalsokar/Documents/Mayur/FI/Reporting FI/Project v2.3/my-ng5-app/src/app/home/test/test1.json", JSON.stringify(req.body) , function(err) {
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




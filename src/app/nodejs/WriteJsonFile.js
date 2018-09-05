// WriteJsonFile_Final.js

var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
var http = require('http');
//var multer  = require('multer');
var ba64 = require("ba64");
const cors = require('cors'); 

//express.bodyParser()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors()); 


// LOgic to store final Json file
app.post('/finalJsonData', function (req, res) {
	
	var fileData = req.body.fileContent;

fs.writeFile("../nodejs/JsonFiles/FinalJson/testJsonFile_Final.json", JSON.stringify(req.body) , function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The FinalJson file was saved!");
 res.status(200).end();
}); 

})


// Logic to store parameter json file
app.post('/paramJsonData', function (req, res) {
	
	var fileData = req.body.fileContent;

fs.writeFile("../nodejs/JsonFiles/ParametersJson/testJsonFile_Params.json", JSON.stringify(req.body) , function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The ParametersJson file was saved!");
 res.status(200).end();
}); 

})


// Logic to store logo

app.post('/file_upload', function (req, res) {
	
	
//console.log(req.body.logoURL);
		
data_url = req.body.logoURL

// Save the image synchronously.
//ba64.writeImageSync("../nodejs/JsonFiles/ParametersJson/myimage", req.body); // Saves myimage.jpeg.
 
// Or save the image asynchronously.
ba64.writeImage("../nodejs/JsonFiles/Logo/Logoimage", data_url, function(err){
    if (err) throw err;

  console.log("Image saved successfully");

    // do stuff

});
		
})


// Expose REST endpoint
  var server = app.listen(800, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})

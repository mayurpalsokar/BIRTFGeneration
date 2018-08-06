// DatabaseService.js

var oracledb = require('oracledb');
var express = require('express');
var app = express();
var fs = require("fs");
const cors = require('cors'); 



function doRelease(connection) {
  connection.close(
    function(err) {
      if (err)
        console.error(err.message);
    });
}

app.use(cors()); 

app.get('/:module', function (req, res) {
	
	oracledb.getConnection(
  {
    user          : "system",
    password      : "release12",
    connectString : "localhost/XE"
  },
  function (err, connection) {
    if (err) {
      console.error(err.message);
      return;
    }
    connection.execute(
      `SELECT report
       FROM xx_generate_bi_rtf_data
       WHERE module = :module`,
	   [req.params.module]
	   //:id,
      //[req.params.id],  // bind value for :id
	  ,
      function(err, result) {
        if (err) {
          console.error(err.message);
          doRelease(connection);
          return;
        }
        console.log(result.rows);
		  res.send(result.rows); 
        doRelease(connection);
      });
	
  }
  
  );
	

})

var server = app.listen(300, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})



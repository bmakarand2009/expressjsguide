var express = require('express');
var app = express();
var port = 3000;

app.get('*', function(req,res){
	res.end("hello world");
});

app.listen(port, function(){
	console.log("The server is runing, " +
		     'please open your browser at http://localhost:%s', 
		     port);

});
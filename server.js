/*
 * @filename server.js
 * @author Niklas Sletteland
 *
 * 
 *
 */

var express = require("express");
var app = express();

app.get("/", function(req, res) {
	res.sendfile('app/index.html')
});

exports.test = function() {
	return 'hello';
} 

/*
app.post("/user/add", function(req, res) { 
	res.send("OK");
});

app.get(/^(.+)$/, function(req, res){ 
 console.log('static file request : ' + req.params);
 res.sendfile( __dirname + req.params[0]); 
});
*/

var port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("started coffee app on port " + port);
});
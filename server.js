/*
 * @filename server.js
 * @author Niklas Sletteland
 *
 * 
 *
 */

var express = require("express");
var app = module.exports = express();

app.use(express.static(__dirname + "/app"));

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
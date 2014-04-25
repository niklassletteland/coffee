/*
 * @filename server.js
 * @author Niklas Sletteland
 *
 * 
 *
 */

'use strict';

var express = require("express");
var app = module.exports = express();

app.use(express.static(__dirname + "/app"));

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("started coffee app on port " + port);
});
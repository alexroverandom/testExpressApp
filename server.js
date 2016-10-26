var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + "/public"));

app.get("/books/", function (req, res) {
  var books = [];
  res.send("Books");
});

app.get('/authors/', function (req, res) {
  res.send("List of authors here");
});

app.get('/api/getwelcome/', function (req, res) {
  res.send("Evgeniya, I love you");
});

app.get("*", function (req, res) {
	console.log(__dirname);
  res.sendFile(path.join(__dirname + "/public"));
});

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8848
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
 
app.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", port " + server_port )
});
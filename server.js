var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.send("Hello Evgeniya");
});

app.get("/books/", function (req, res) {
  var books = [];
  res.send("Books");
});

app.get('/authors/', function (req, res) {
  res.send("List of authors here");
});

app.get('*', function (req, res) {
	console.log(__dirname);
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(8848, function () {
  console.log("Example app listening on port 8848!");
});
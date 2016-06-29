var express = require('express');
var app = express(),
  models = require();

app.get('/', function (req, res) {
  res.send('Hello Evgeniya');
});

app.get('/books/', function (req, res) {
  var books = []
  res.send('Hello Evgeniya');
});

app.get('/', function (req, res) {
  res.send('Hello Evgeniya');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
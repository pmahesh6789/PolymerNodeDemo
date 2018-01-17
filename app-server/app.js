

var express = require("../node_modules/express");
var app = express();
var path = require("path");

app.get('/', function(req, resp){
    resp.sendFile(path.join(__dirname + '/../app/index.html'));
});

console.log("path name - " + path.join(__dirname, '../'));

app.use(express.static(path.join(__dirname, '../')));

var http = require('http').Server(app);

http.listen(6789);
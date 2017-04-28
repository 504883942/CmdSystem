'use strict';
var express = require('express');

var fs = require('fs');
var Path = require('path');
var mime = require('./mime.js').mime;
var bodyParser = require('body-parser');
var redis = require("redis"),client = redis.createClient();
//var http = require('http');
var port = process.env.PORT || 1337;
var app = express();
app.get('/index', function (req, res) {
    filesLoad('index.html', 'html', req, res);
})
app.post("/cmd", function (req, res) {
    
})
function filesLoad(filePath, type, req, res) {
    fs.exists(filePath, function (exists) {

        if (!exists) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            // res.write();    
            res.end();
        } else {
            fs.readFile(filePath, 'binary', function (err, file) {
                try {
                    if (!err) {
                        res.writeHead(200, { 'Content-Type': mime[type] });
                        res.write(file, 'binary');
                        res.end();
                    }

                } catch (error) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    // res.write();    
                    res.end();
                }
            });
        }
    })
}
var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
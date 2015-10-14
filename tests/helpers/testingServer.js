var app = require('../../app');
var http = require('http');
var server = http.createServer(app);

module.exports = server;

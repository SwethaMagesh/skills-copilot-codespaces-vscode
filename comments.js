// create web server
const http = require('http');
const fs = require('fs');
const url = require('url');

const app = http.createServer(function (request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query; // querystring
    var pathname = url.parse(_url, true).pathname;
});


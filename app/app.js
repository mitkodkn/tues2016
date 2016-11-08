var http = require('http');
var url = require('url');
var imageProvider = require('./modules/image-provider.js');

var port = 8180;
var hostname = 'localhost';

function handleRequest(request, response)
{
	imageProvider.provideImage(response);
}

http.createServer(handleRequest).listen(port, hostname);


var http = require('http');
var url = require('url');
var imageProvider = require('./modules/image-provider.js');
var dataProvider = require('./modules/data-provider.js');

var port = 8180;
var hostname = 'localhost';

function handleRequest(request, response)
{
	if (request.url ==='/favicon.ico')
	{
		console.log('Ignore facicon request...');
	}
	else
	{	
		var get_params = url.parse(request.url, true);
		if (get_params.query.image != null && get_params.query.image != null)
		{
			imageProvider.provideImage(response);
		}
		else
		{
			dataProvider.provideData(response);
		}
	}
}

http.createServer(handleRequest).listen(port, hostname);


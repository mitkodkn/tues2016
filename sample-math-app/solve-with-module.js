var http = require('http');
var url = require('url');
var solver = require('./modules/solver');

function handleRequest(request, response)
{
	var query = url.parse(request.url, true).query;
	
	var json_result = solver.solve(query.a, query.b, query.c);
	
	response.end(JSON.stringify(json_result));
	
}

http.createServer(handleRequest).listen(8190, '127.0.0.1');
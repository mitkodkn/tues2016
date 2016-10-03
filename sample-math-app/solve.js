/**
 * 
 */

var http = require('http');
var url = require('url');

function handleRequest(request, response)
{
	var query = url.parse(request.url, true).query;
	
	var json_result = solve(query.a, query.b, query.c)	
	
	response.end(JSON.stringify(json_result));
	
}

function solve(a, b, c)
{
	var discrimanant = (Math.pow(b,2)-4*a*c);
	
	var x1= "NaN"; 
	var x2= "NaN";
	if (discrimanant >=0)
	{
		x1 = (-b - Math.pow(discrimanant, 0.5))/(2*a);
		x2 = (-b + Math.pow(discrimanant, 0.5))/(2*a);
	}
	var result = {};
	result.x1 = x1;
	result.x2 = x2;
	result.D = discrimanant;
	return result;
}

http.createServer(handleRequest).listen(8190, '127.0.0.1');






/**
 * New node file
 */
var fs = require('fs');

function readData(filename, response)
{
	console.log('providing ' + filename);
	fs.exists(filename, function(exists) {
		if (exists) {		
				fs.readFile(filename, function(error, data) {	
					if (!error)	{
						response.writeHead(200, {'Content-Type': 'application/json'});
						response.end(data);
					}
					else {			
						response.writeHead(500);
						response.end('Internal Server Error');
					}
				});
		}
		else
		{
			response.writeHead(404);
			response.end('Image not found');
		}
	});
	
}
exports.provideData = function(response)
{
	return readData('data/data.json', response);
}
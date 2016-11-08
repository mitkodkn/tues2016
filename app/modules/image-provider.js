/**
 * New node file
 */
var fs = require('fs');

function readImage(filename, response)
{
	console.log('providing ' + filename);

	fs.readFile(filename, 
			function(error, data) {	
				if (!error)	{
					response.end(data);
				}
			});
}

exports.provideImage = function(response)
{
	response.writeHead(200, {
		'Content-Type' : 'image/jpeg'
	});	

	readImage('./images/image.jpg', response);	
};


var express = require('express');
var router = express.Router();
var dataProvider = require('../modules/data-provider.js');

var dbProvider = require('../modules/mongodb-provider.js');

/* GET home page. */


router.get('/', function(request, response, next){
	console.log('Get all');
	dbProvider.provideList(response);
	
});
router.post('/', function(request, response, next){
	dbProvider.saveCharacter(request, response);
});

router.post('/:type', function(request, response, next){
	dbProvider.saveImage(request, response);
});

router.get('/:type', function(request, response, next){
	console.log('Get by type: ' + request.params.type);
	console.log('Image requested: ' + request.query.image);
	console.log(request.query);
	var image = request.query.image;
	var type = request.params.type;
	
	if ((image != null) && (type != null && type != ''))
	{
		console.log('Image request');
		console.log(image);
		dbProvider.getImage(request, response);
	}
	else if (type != null && type != '')
	{
		console.log('Data requested');
		console.log(image);
		dataProvider.queryData('data/data.json',{'Content-Type': 'application/json'}, request.params.type, response);
	}
	else
	{
		dbProvider.provideList(response);
	}
});

module.exports = router;

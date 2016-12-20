var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/characters');

var characterSchema = new Schema ({	
	//firstname : String,
	firstname : {type: String, index: {unique: true}},
	lastname : String,
	strength : Number,
	imageUrl : String,
	type : String	
});

var Character = mongoose.model('Character', characterSchema);
module.exports = Character;

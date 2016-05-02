var mongoose = require('mongoose');

// Quote Schema
var quoteSchema = mongoose.Schema({
	text: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	},
	create_date: {
		type: Date,
		default: Date.now
	}
});

var Quote = mongoose.model('Quote', quoteSchema);
module.exports = Quote;

// Get All Quotes
module.exports.getQuotes = function(callback, limit){
	Quote.find(callback).limit(limit);
};

// Get Quote By Id
module.exports.getQuoteById = function(id, callback){
	Quote.findById(id, callback);
};

// Get Random Quote
module.exports.getRandomQuote = function(callback){
	Quote.count({}, function(err, count){
		if(err){
			throw err;
		}
		Quote.find(callback).limit(1).skip(Math.floor(Math.random() * count));
	});
}

// Add Quote
module.exports.addQuote = function(quote, callback){
	Quote.create(quote, callback);
};

// Update Quote
module.exports.updateQuote = function(id, quote, options, callback){
	var query = {_id: id};
	var update = {
		text: quote.text,
		author: quote.author
	}
	Quote.findOneAndUpdate(query, update, options, callback);
};

// Delete Quote
module.exports.removeQuote = function(id, callback){
	var query = {_id: id};
	Quote.remove(query, callback);
};
var Quote = require('../models/quote');
var mongoose = require('mongoose');

exports.quotes = function(req, res){
	Quote.getQuotes(function(err, quotes){
		if(err){
			throw err;
		}
		res.json(quotes);
	});
};

// Get Quote by Id
exports.quote = function(req, res){
	Quote.getQuoteById(req.params.id, function(err, quote){
		if(err){
			throw err;
		}
		res.json(quote);
	});
};

// Get Random Quote
exports.random_quote = function(req, res){
	Quote.getRandomQuote(function(err, quote){
		if(err){
			throw err;
		}
		res.json(quote);
	});
};

// Post (Add New) Quote
exports.add_quote = function(req, res){
	var quote = req.body;

	Quote.addQuote(quote, function(err, quote){
		if(err){
			throw err;
		}
		res.json(quote);
	});
};

// Put (Update) Quote
exports.update_quote = function(req, res){
	var id = req.params.id;
	var quote = req.body;

	Quote.updateQuote(id, quote, {}, function(err, quote){
		if(err){
			throw err;
		}
		res.json(quote);
	});
};

// Delete Quote
exports.delete_quote = function(req, res){
	var id = req.params.id;

	Quote.removeQuote(id, function(err, quote){
		if(err){
			throw err;
		}
		res.json(quote);
	});
};



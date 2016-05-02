var express = require('express'), 
	app = express(),
	bodyParser = require('body-parser'), 
	methodOverride = require('method-override');
	mongoose = require('mongoose'),
	routes = require('./routes'),
	api = require('./routes/api'),
	port = process.env.PORT || 3000;

app.set('views', __dirname + '/views');
app.engine('jade', require('jade').__express);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(methodOverride());
app.use(bodyParser.urlencoded({extended: true}));

// Connect to Mongoose
mongoose.connect('mongodb://localhost/quotes');
var db = mongoose.connection;

// Page Routes
app.get('/', routes.index);
app.get('/partials/:filename', routes.partials);


// // API Routes
app.get('/api/quotes', api.quotes);
app.get('/api/quotes/:id', api.quote);
app.get('/api/random_quote', api.random_quote);
app.post('/api/quotes', api.add_quote);
app.put('/api/quotes/:id', api.update_quote);
app.delete('/api/quotes/:id', api.delete_quote);

app.listen(port, function() {
  console.log('Listening on port ' + port);
});
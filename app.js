var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db;

if (process.env.ENV === 'Test') {
    db = mongoose.connect('mongodb://localhost/REST-API_test');
} else {
    db = mongoose.connect('mongodb://localhost/REST-API');
}

var Book = require('./models/bookModel');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

bookRouter = require('./routes/bookRoutes')(Book);

app.use('/api/books', bookRouter);
// app.use('/api/authors', authorRouter);

app.get('/', function (req, res) {
    res.send('welcome to my API')
});

app.listen(port, function () {
    console.log('Gulp is running my app on PORT: ' + port)
});

module.exports = app;
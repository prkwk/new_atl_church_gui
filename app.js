var express    = require('express');
var app        = express();
var path       = require('path');
var bodyParser = require('body-parser');
var mysql      = require('mysql');

app.set('view engine', '.ejs');
app.use(express.static(path.join(__dirname, 'public')));

//home page
app.get('/', (req, res) => {
	res.render('index');
});

//ministry services
app.get('/ministries', (req, res) => {
	res.render('ministries');
});

app.post('/ministries', (req, res) => {
	res.render('ministries');
});

app.put('/ministries', (req, res) => {
	res.render('ministries');
});

app.delete('/ministries', (req, res) => {
	res.render('ministries');
});

//sermon services
app.get('/sermons', (req, res) => {
	res.render('sermons');
});

app.post('/sermons/add', (req, res) => {
	res.render('sermons');
});

app.put('/sermons/update/:sermonid', (req, res) => {
	res.render('sermons');
});

app.delete('/sermons/delete/:sermonid', (req, res) => {
	res.render('sermons');
});

//blog services
app.get('/blog', (req, res) => {
	res.render('blog');
});

app.post('/blog', (req, res) => {
	res.render('blog');
});

app.put('/blog', (req, res) => {
	res.render('blog');
});

app.delete('/blog', (req, res) => {
	res.render('blog');
});

// concatact services
app.get('/contact', (req, res) => {
	res.render('contact');
});

app.post('/contact', (req, res) => {
	res.render('contact');
});

app.put('/contact', (req, res) => {
	res.render('contact');
});

app.delete('/contact', (req, res) => {
	res.render('contact');
});

//livestream services
app.get('/livestream', (req, res) => {
	res.render('index');
});

app.post('/livestream', (req, res) => {
	res.render('index');
});

app.put('/livestream', (req, res) => {
	res.render('index');
});

app.delete('/livestream', (req, res) => {
	res.render('index');
});

app.get('/search', (req, res) => {
	res.render('index');
});

app.post('/search', (req, res) => {
	res.render('index');
});

app.listen(2000, () => {
	console.log("SERVER ON!!! PORT 2500");
});
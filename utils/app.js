const express = require('express');
const session = require('express-session');
const path = require('path');
const config = require('config');

const passport = require('./passport');

var app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.use(
	session({
		secret: config.get('SESSION_SECRET'),
		resave: false,
		saveUninitialized: true,
	})
);

app.use(passport.initialize());
app.use(passport.session());

module.exports = app;

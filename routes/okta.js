const { builtinModules } = require('module');
const passport = require('passport');
const router = require('express').Router();

router.get('/', (req, res) => {
	res.send('Okta API');
});

router.get(
	'/login',
	passport.authenticate('okta', {
		successRedirect: '/users',
		failureRedirect: '/',
	})
);

router.get('/auth/callback', (req, res, next) => {
	console.log('/okta/callback');

	passport.authenticate('okta', (err, user, info) => {
		if (req.query.error != undefined) {
			res.redirect('/');
		} else {
			req.logIn(user, (err) => {
				res.redirect('/users');
			});
		}
	})(req, res, next);
});

module.exports = router;

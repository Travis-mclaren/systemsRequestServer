const passport = require('passport');
const OktaStrategy = require('passport-okta-oauth').Strategy;
const config = require('config');

passport.use(
	new OktaStrategy(
		{
			audience: 'https://' + config.get('OKTA_DOMAIN'),
			clientID: config.get('CLIENT_ID'),
			clientSecret: config.get('CLIENT_SECRET'),
			//			idp: config.get('SESSION_SECRET'),
			response_type: 'code',
			callbackURL:
				'http://localhost:' + config.get('PORT') + '/okta/auth/callback',
			scope: ['openid', 'profile'],
		},
		(accessToken, refreshToken, profile, done) => {
			done(null, profile);
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	done(null, id);
});

module.exports = passport;

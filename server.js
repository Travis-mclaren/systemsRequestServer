const config = require('config');
const app = require('./utils/app');

app.use('/', require('./routes'));

app.listen(config.get('PORT'), () => {
	console.log(`Server has been started on ${config.get('PORT')}`);
});

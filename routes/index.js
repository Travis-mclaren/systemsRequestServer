const router = require('express').Router();
const oktaRouter = require('./okta');

router.use('/okta/', oktaRouter);

module.exports = router;

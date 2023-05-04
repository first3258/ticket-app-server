const router = require('express').Router();

router.use('/ticket', require('./ticket'));

module.exports = router;

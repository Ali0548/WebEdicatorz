const router = require('express').Router();
const authentication = require('./authentication')
const notes = require('./notes')
router.use('/auth', authentication)
router.use('/note', notes)


module.exports = router
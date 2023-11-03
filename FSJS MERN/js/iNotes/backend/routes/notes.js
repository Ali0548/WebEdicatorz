const router = require('express').Router();
const controllers = require('../controllers/index')
router.post('/add', controllers.notes.addNote);


module.exports = router;
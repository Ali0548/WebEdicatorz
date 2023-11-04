const router = require('express').Router();
const controllers = require('../controllers/index')
router.post('/add', controllers.notes.addNote);
router.get('/getAll', controllers.notes.getAllNotes);


module.exports = router;
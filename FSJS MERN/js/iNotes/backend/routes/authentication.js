const router = require('express').Router();
const controllers = require('../controllers/index')
router.post('/login', controllers.authentication.login );
router.post('/register', controllers.authentication.registration );

module.exports = router;
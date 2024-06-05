const router = require('express').Router();
const AuthController = require('../controllers/AuthController')

router.post('/signup', AuthController.getSignUped);
router.post('/login', AuthController.loggedIn);
router.post('/logout', AuthController.loggedOut);

module.exports = router;

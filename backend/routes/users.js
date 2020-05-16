const router = require('express').Router();
const UserController = require('../controllers/UserControllers');
const { authentication, is } = require('../middleware/authentication.js')
router.post('/Register',UserController.register);
router.post('/login',UserController.login);
router.get('/logout',authentication ,UserController.logout);


module.exports = router;
const router = require('express').Router();
const UserController = require('../controllers/UserControllers');
router.post('/Register',UserController.register);
router.post('/login',UserController.login);


module.exports = router;
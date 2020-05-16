const router = require('express').Router();
const ProductController = require('../controllers/ProductController');
router.post('/juego',ProductController.Juego)
router.get('/',ProductController.getAll)
router.get('/:_id', ProductController.getById);


module.exports = router
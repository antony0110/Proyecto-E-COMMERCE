const router = require('express').Router();
const ProductController = require('../controllers/ProductController');
router.post('/Juego',ProductController.Juego)
router.get('/Products',ProductController.getAll)


module.exports = router
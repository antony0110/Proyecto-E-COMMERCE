const router = require('express').Router();
const OrderController = require('../controllers/OrderControllers');
router.post('/pedido',OrderController.Pedido)
router.get('/mostrarpedido',OrderController.MostrarPedido)



module.exports = router
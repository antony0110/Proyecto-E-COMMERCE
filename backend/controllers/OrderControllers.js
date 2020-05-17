const Order = require('../models/Product')
const OrderController = {
    Pedido(req, res) {
        Order.create(req.body)
            .then(order => res.status(201).send(order))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    },




}




module.exports = OrderController;
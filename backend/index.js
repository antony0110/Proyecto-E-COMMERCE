const express = require ('express');
const mongoose = require ('mongoose');
const morgan = require('morgan');
const app = express();
const PORT = 4000;
const usersRouter = require('./routes/users.js');
const productsRouter = require('./routes/products.js');
 
mongoose.connect('mongodb://localhost:27017/ECOMMERCE',{
useCreateIndex:true,
useFindAndModify:false,
useNewUrlParser:true,
useUnifiedTopology:true
})
.then(()=> console.log('Conectado correctamente a MongoDB'))
.catch(console.error);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.use(express.json());
app.use(morgan ('dev'));
app.use('/user', usersRouter);
app.use('/product', productsRouter);
app.listen(PORT, () => console.log('server running on port' + PORT));
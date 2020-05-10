const express = require ('express');
const mongoose = require ('mongoose');
const morgan = require('morgan');
const app = express();
const PORT = 3001;
const usersRouter = require('./routes/users.js');
 
mongoose.connect('mongodb://localhost:27017/ECOMMERCE',{
useCreateIndex:true,
useFindAndModify:false,
useNewUrlParser:true,
useUnifiedTopology:true
})
.then(()=> console.log('Conectado correctamente a MongoDB'))
.catch(console.error);


app.use(express.json());
app.use(morgan ('dev'));
app.use('/users', usersRouter);
app.listen(PORT, () => console.log('server running on port' + PORT));
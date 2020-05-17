import React from 'react';
import './Carrito.scss';
import { NavLink } from 'react-router-dom';
import {TagsOutlined} from '@ant-design/icons';
import { ShoppingCartOutlined } from '@ant-design/icons';
import juego from './juego.jpg';
const Carrito = () => {
    return (
    <div >
    <div className='escogetujuego'>
        <p className='escoge'>MI CARRITO</p>
        </div>
<div className='carritocontainer'>
<div className='pedido'>
<div class="Links">
            <p>Producto</p>
            <p>Unidad</p>
            <p>Precio</p>
            <p>TOTAL</p>
        </div>
<div className='compra1'>
<img className="juego1" src={juego} alt="juegO" /> 
<div className='numero'>
<input type="Number" placeholder='Elige cuantos te quieres llevar!!!'/>
</div>
<div className='precios'>
<p className='precio'> 10.99€</p>
</div>
<div className='total'>
<p  className='totales'> 10.99€</p>
</div>
</div>
<div className='botones'>
<NavLink to="/"><button className='boton1'>  Seguir Comprando!!<ShoppingCartOutlined/> </button></NavLink>
<button className='boton2'> Comprar!! <TagsOutlined /></button>
    </div>
</div>

</div>

    </div>
    )
}
export default Carrito;
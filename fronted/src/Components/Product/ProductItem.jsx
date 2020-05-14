import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartOutlined } from '@ant-design/icons';
import { addCart } from '../../redux/action';
import './ProductItem.scss'
const Product = ({ product,detailed}) => {
    return (<Link className="product" key={product._id} to={'/product/'+product._id}>
        <img src={product.image_path} alt="" />
        <span className="title">{product.name}</span>
        <span className="price">{product.price}€</span>     
        <ShoppingCartOutlined className="carrito" onClick={()=>addCart(product)} />  
        {detailed && <span className="description">{product.description}€</span>}
    </Link>
    )
}
export default Product;
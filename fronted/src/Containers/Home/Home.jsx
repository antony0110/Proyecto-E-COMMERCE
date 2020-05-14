import React, { useEffect, useState } from 'react'
import { API_URL } from '../../api-config';
import axios from 'axios';
import './Home.scss'
import ProductItem from '../../Components/Product/ProductItem'
const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get(API_URL + '/product')
            .then(res => setProducts(res.data))
            .catch(console.error)
    }, [])
    return (
      
        <div>
        <p>ESCOGE TU JUEGO FAVORITO</p>
            <div  className="products">
            {products.map(product => <ProductItem detailed={false}  key={product._id} product={product}/>)}
            </div>
          
        </div>
        
    )
}
export default Home;
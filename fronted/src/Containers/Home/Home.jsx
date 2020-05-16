import React, { useEffect} from 'react'
import './Home.scss'
import ProductItem from '../../Components/Product/ProductItem'
import { getAllProducts } from '../../redux/action';
import { connect } from 'react-redux';
const Home = (props) => {
    useEffect(() => {
        getAllProducts()
        .catch(console.error)
    }, [])
    return (
      
        <div>
        <p className='escoge'>ESCOGE TU JUEGO FAVORITO</p>
        <div className="products">
            {props.products?. filter(product => props.search ? product.name.includes(props.search):true). map(product => <ProductItem key={product._id} product={product}/>)}
            </div>
        </div>
        
        
    )
}
const mapStateToProps = (state) => ({products:state.products,search:state.search})
export default connect(mapStateToProps) (Home);
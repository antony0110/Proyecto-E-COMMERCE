  
import React, { Component } from 'react'
import axios from "axios";
import { API_URL } from '../../api-config';
import './ProductDetail.scss';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { addCart } from '../../redux/action';
import Product from '../../Components/Product/ProductItem';
 class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {},
            user:{}
        }
    }
    componentDidMount() {
        const { _id } = this.props.match.params;//extraemos el parámetro _id de la ruta
        axios.get(API_URL + '/product/' + _id)//hacemos la petición para obtener ese producto en detalle
            .then(res => this.setState({ product: res.data }))//actualizamos el estado acorde a la respuesta del servi
    }
    render() {
        return (
            <div className="product">
                    <img src={this.state.product.image_path} alt="" />
                    <div className="detail">
                        <div className="cajaNombre">
                        <span className="nombre" >{this.state.product.name}</span>
                        </div>
                        <span className="descripcion" >{this.state.product.description}</span>
                        <span  className="precio">{this.state.product.price}€</span>
                        <span  className="stock" >{this.state.product.stock} unidades  </span>  
                        {console.log(this.state.user)}
                        {this.props.user ?   
                        <div className='coches'>  
                        <NavLink to="/carrito"> <ShoppingCartOutlined className="coche" onClick={()=>addCart(Product)}   />  </NavLink>
                        </div>
                        :
                        <div className='coches'>  
                        <NavLink to="/login"> <ShoppingCartOutlined className="coche" />  </NavLink>
                        </div>
                        
    }
     
                    </div>
                  x
            </div>
        )
    }
}
   const  mapStateToProps = (state) => ({ user:state.user })
   export default connect(mapStateToProps)(ProductDetail);
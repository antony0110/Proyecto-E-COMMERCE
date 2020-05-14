import React from 'react';
import './Header.scss';
import logo from './logo1.png';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { ShoppingCartOutlined } from '@ant-design/icons';
import { logout} from "../../redux/action";

const Header = props => {
    return (
        <header className="header">
            {/* NavLink es para crear una clase active cuando esta en la ruta */}
            <div className='guestZone'>
            <NavLink to="/" exact>Home</NavLink>
           
            <div className="search">
                <input type="text" className="searchTerm" placeholder="Empieza tu busqueda....."/>
                <button type="submit" className="searchButton">
                    <i className="fa fa-search"></i>
                </button>
            </div> 
            </div>
            <img className="logo" src={logo} alt="logo" />           
            {props.user ?
                <div className="userZone">
                    <ShoppingCartOutlined className="carro"  /> 
                    <a>{props.user.email}</a>
                    <a onClick={logout} > Logout</a>  
                </div>
                :
            <div className="guestZone">
                <NavLink to="/login" exact>Login</NavLink>
                <NavLink to="/register" exact>Registro</NavLink>
            </div>
}
        </header>
    )
}
const mapStateToProps = (state) => ({ user: state.user })
export default connect(mapStateToProps)(Header);
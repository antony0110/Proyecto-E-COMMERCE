import React from 'react';
import './Header.scss';
import logo from './logo1.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
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
            <div className="guestZone">
                <NavLink to="/login" exact>Login</NavLink>
                <NavLink to="/register" exact>Registro</NavLink>
            </div>
        </header>
    )
}
export default Header;
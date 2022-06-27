import React from "react";
import style from "./NavBar.css"
import Cart  from './CartWidget';
import {Link} from 'react-router-dom';


export const NavBar = () => {

	return <>
  <nav className={style.nav}>
  <h1>Tienda Hardware</h1>
  
    <ul>
    <li><Link to={`/categories`}>
Categorias</Link></li>
      <li><a href="#">Contacto</a></li>
      <li><a href="#">Menu</a></li> 
    </ul>
    <Cart />
    </nav>


    </>;
};

export default NavBar;
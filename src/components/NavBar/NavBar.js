import React from "react";
import style from "./NavBar.css"
import Card  from './CartWidget';


export const NavBar = () => {

	return <>
  <nav className={style.nav}>
  <h1>Tienda para Coder</h1>
  
    <ul>
      <li><a href=".">Home</a></li>
      <li><a href=".">Contacto</a></li>
      <li><a href=".">Menu</a></li> 
    </ul>
    <Card />
    </nav>


    </>;
};

export default NavBar;
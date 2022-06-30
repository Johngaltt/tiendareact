import React from "react";
import style from "./NavBar.css"
import Carro  from './CartWidget';
import {Link} from 'react-router-dom';
import { NavDropdown,Nav} from 'react-bootstrap';


export const NavBar = () => {

	return <>
  <nav className={style.nav}>
  <h1>Tienda Hardware</h1>
  
    <ul>
      <Nav.Link>
<Link to={`/categories`}>
    Inicio
</Link>
    </Nav.Link>    
      <NavDropdown title="Categorias" id="basic-nav-dropdown">
      <li><NavDropdown.Item><Link to={`/categories/1`}>AMD</Link> </NavDropdown.Item></li>
      <li><NavDropdown.Item><Link to={`/categories/2`}>INTEL</Link> </NavDropdown.Item></li>
      <NavDropdown.Divider />
      </NavDropdown>
      <li><a href=".">Menu</a></li> 
    </ul>
    <Carro />
    </nav>


    </>;
};

export default NavBar;
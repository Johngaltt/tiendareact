import React from "react";
import "./CartWidget.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Nav} from 'react-bootstrap';


export const Cart = () => {

	return (
        <Nav.Link href="#cart">
        <FontAwesomeIcon icon={faCartShopping} class="cWidget" />
        </Nav.Link>


	);
};

export default Cart;

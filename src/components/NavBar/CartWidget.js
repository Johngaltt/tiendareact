import React from "react";
import "./CartWidget.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


export const Cart = () => {

	return (
        <div>
        <FontAwesomeIcon icon={faCartShopping} class="cWidget" />
      </div>


	);
};

export default Cart;

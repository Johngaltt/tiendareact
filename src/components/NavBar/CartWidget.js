import React, { useContext } from 'react';
import './CartWidget.css';
import { CartContext } from '../CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";


export const Carro = () => {


        const {cartlength}=useContext(CartContext);
            console.log("Valor de total en widget");
            console.log("Loading Cartwidget");
            return (
        
        
                <Nav.Link href='#'> Cantidad de items en el carro :{ cartlength()>0 && cartlength()}
                        <Link  to={'/cart'}>
                        <FontAwesomeIcon icon={faCartShopping} class="cWidget" /> </Link>
                        </Nav.Link>
        
           )
        }

        export default Carro;


import { Button} from 'react-bootstrap';
import React, {useContext} from 'react';
import {CartContext} from './CartContext';

export const DelButton = ({itemid}) => {
const {removeitem}=useContext(CartContext);
console.log("Estoy en DelButton con itemid:"+itemid);

return(
    <Button  onClick={()=>removeitem({itemid})}>Eliminar Item</Button>
)

};



export default DelButton;
import {Button,ButtonGroup,Table} from 'react-bootstrap';
import React, {useContext} from 'react';
import {CartContext} from '../CartContext';
import {useParams} from "react-router-dom";
const ItemCount=({min,max,count,product_name})=>{
const {itemid}=useParams();

const {additem}=useContext(CartContext);


    return (
<>
        <p></p>
        <p></p>
        <ButtonGroup aria-label="Basic example">
        <Table striped bordered hover variant="light" size="sm" align="center" >
  <thead style={{ width: '18rem' }}>
    <tr>
      <th></th>
      <th style={{ width: '18rem' }}>{product_name}</th>
      <th>      </th>
    </tr>
  </thead>
  <tbody style={{ width: '18rem' }}>
    <tr>
        <td>
    <Button variant="secondary"  onClick={min}>-</Button>
            </td>
      <td align="center">{count}</td>
          <td>
        <Button variant="secondary" onClick={max}>+</Button>
              </td>
    </tr>
    <tr>
      <td>  </td>
      <td align="center">
        <button disabled={count===0} id="but2" onClick={()=>additem({itemid},{count})}>Agregar a carrito</button>
</td>
      <td> </td>
    </tr>
  </tbody>
</Table>

</ButtonGroup>


</>
    );


};

export default ItemCount;
import React from "react";
import {Button,ButtonGroup,Table} from 'react-bootstrap';
const ItemCount=({min,max,onAdd,count})=>{

console.log(count);
    return (
<>
        <p></p>
        <p></p>


        <ButtonGroup aria-label="Basic example">
        <Table striped bordered hover variant="light" size="sm" align="center" >

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
      <td align="center"  >
          <Button variant="secondary"   disabled={ count===0}  onClick={onAdd} align="center">Agregar al Carrito</Button>
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
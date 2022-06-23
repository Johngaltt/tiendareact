import React from 'react';
import {Card} from 'react-bootstrap';


const ItemDetail =({jsonpack})=>{
    console.log(jsonpack);
    return(
      <>
        <div id="centerman" align="center">
        <Card  border="light"  bg="dark" style={{ width: '18rem' }}
className="mb-2">

<Card.Header>

  <Card.Img variant="top"  src={jsonpack.thumbnail} />
            </Card.Header>
  <Card.Body>
    <Card.Title>{jsonpack.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Precio:{jsonpack.price}</Card.Subtitle>
    <Card.Text>
        Cantidad disponible:{jsonpack.available_quantity}<p></p>
        </Card.Text>
  </Card.Body>
</Card>

        </div>
      </>
    )

};


export default ItemDetail;
import React from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import ItemCount from "./ItemCount/ItemCount";



const ItemDetail =({jsonpack})=>{
  console.log("Detalle de ItemDetail:",jsonpack);
    return(
      <>
        <div id="centerman" align="center">
        <Card  border="light"  bg="dark" style={{ width: '18rem' }}
className="mb-2">

<Card.Header>

  <Card.Img variant="top"  src={jsonpack.thumbnail} />
            </Card.Header>
  <Card.Body>
  <Link to={`/item/${jsonpack.id}`}>

  <Card.Link href="#" >{jsonpack.title}</Card.Link>
  </Link>

  <Card.Subtitle className="mb-2 text-muted">Precio:{jsonpack.price}</Card.Subtitle>
  <Card.Text>
        Cantidad disponible:{jsonpack.available_quantity}<p></p>
  </Card.Text>
  <ItemCount initial="0" min="0" max="10" />
  </Card.Body>
</Card>


        </div>
      </>
    )

};


export default ItemDetail;
import React from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import ItemCount from "./ItemCount/ItemCount";



const ItemDetail =({jsonpack})=>{
  console.log("Detalle de ItemDetail:",jsonpack);
    return(
      <>
        <div id="centerman" align="center">
        <Card  border="primary"  bg="light" style={{ width: '18rem' }}
className="mb-2">

<Card.Header>

  <Card.Img variant="top"  src={jsonpack.pictureurl} />
            </Card.Header>
  <Card.Body>
  <Link to={`/item/${jsonpack.id}`}>

  <Card.Link className="mb-2 text-primary" href="#" >{jsonpack.title}</Card.Link>
  </Link>

  <Card.Subtitle className="mb-2 text-muted">Precio:{jsonpack.price}</Card.Subtitle>
  <Card.Text>
        Cantidad disponible:{jsonpack.stock}
  </Card.Text>
  <ItemCount/>
  </Card.Body>
</Card>


        </div>
      </>
    )

};


export default ItemDetail;
import React from "react";
import {Card} from 'react-bootstrap';
import ItemCount from "./ItemCount/ItemCount";


const Item =({jsonpack})=>{
  return(
      <>

<Card  border="primary" bg="light" text="dark"  style={{ width: '30rem' }}
className="mb-2">

<Card.Header>
  <Card.Img variant="top"  src={jsonpack.pictureurl} />
            </Card.Header>
  <Card.Body>
    <Card.Title>{jsonpack.title}</Card.Title>
        <Card.Subtitle className="mb-3 text-primary">Precio:{jsonpack.price}</Card.Subtitle>
    <Card.Text>
        Descripción<p></p>{jsonpack.description}
        </Card.Text>
        <ItemCount initial="0" min="0" max="10" />
     
  </Card.Body>
</Card>


      </>


    );

};



export default Item;
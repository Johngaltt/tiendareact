import React from "react";
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom'


const Item =({jsonpack})=>{
  const itemid=jsonpack.id;
  console.log(itemid);


  return(
      <>

<Card  border="primary" bg="light" text="dark"  style={{ width: '30rem' }}
className="mb-2">

<Card.Header>
  <Card.Img variant="top"  src={jsonpack.pictureurl} />
            </Card.Header>
  <Card.Body>

  <Link to={`/item/${itemid}`}><Card.Link className="mb-3 text-primary">{jsonpack.title}</Card.Link></Link>

        <Card.Subtitle className="mb-3 text-primary">Precio:{jsonpack.price}</Card.Subtitle>
    <Card.Text>
        Descripción:<p></p>{jsonpack.description}
        </Card.Text>
  </Card.Body>
</Card>


      </>


    );

};



export default Item;
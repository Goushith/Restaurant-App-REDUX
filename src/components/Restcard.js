import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Restcard({restaurants}) {
    console.log(restaurants);
  return (
    <Col sm={12} md={6} lg={4} xl={3}  > 
    
   
    <br/>   
      <Card >
    <Card.Img variant="top" src={restaurants.photograph} />
    <Card.Body>
      <Card.Title>{restaurants.name}</Card.Title>
      <Card.Text>
        {restaurants.address}
      </Card.Text>
      <Link to={`Viewrest/${restaurants.id}`}>
      <Button variant="primary">Get In</Button>
      </Link>

    </Card.Body>
  </Card><br/>
    
    
    </Col>
    
  )
}

export default Restcard
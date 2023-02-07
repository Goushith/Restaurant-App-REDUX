import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Restreview({rev}) {



    
    console.log(rev);
  return (
    rev.map(item=>(

        <Card>
      <Card.Header as="h5">{item.name}</Card.Header>
      <Card.Body>
        <Card.Title>{item.comments}</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        
      </Card.Body>
    </Card>



    ))
  )
}

export default Restreview
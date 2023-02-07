import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



function Header() {
  return (
    <div><Navbar className='navbar' bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt="No image"
          src="https://www.merchantmaverick.com/wp-content/uploads/2019/09/plate.png"
          width="50"
          height="50"
          className="d-inline-block "
        />{' '}
        &nbsp;  
        Resturent App
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header
import React from 'react';
import { Navbar,Container } from 'react-bootstrap';

const Header=(props)=>{
    const {title}=props;//ye bhi kar sakte hai,ye bhi kar sakte hai jaha per props diya hai as an argument then waha per {title} likh de phir kuch bhi karkne ki jarurat nahi padegui
   return ( <Navbar bg="dark" data-bs-theme="light">
            <Container>
            <Navbar.Brand href="/">{title}</Navbar.Brand>
            </Container>
            </Navbar>
            );
};
export default Header;
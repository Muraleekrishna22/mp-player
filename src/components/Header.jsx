import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <Navbar className="bg-info">
        <Container>
          <Navbar.Brand >
          <link to={'/'} style={{textDecoration:'none',color:'blue',fontWeight:"30px"}}/>
          <i className='fa-solid fa-play fa-beat me-2'></i>
          Media-player
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
import React from 'react'
import { NavLink } from 'reactstrap'
import { Navbar, Nav } from 'react-bootstrap'
import './styles.css'

function NavigationBar() {
  return (
    <div className="App">
      <Navbar expand="lg">
        <Navbar.Brand>iEstimate</Navbar.Brand>
        <Nav>
          <NavLink href="/leaderboard">Leaderboard</NavLink>
          <NavLink href="/login">Login</NavLink>
          <NavLink href="/">Categories</NavLink>
        </Nav>
      </Navbar>
    </div>
  )
}

export default NavigationBar

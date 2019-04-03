import React, { Component } from 'react';
import {  Collapse,
          Navbar,
          NavbarToggler,
          NavbarBrand,
          Nav,
          NavItem,
          NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/App.css';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="Navigation">
        <Navbar dark style={{background: 'linear-gradient(-90deg, #112442, #000000)' }} expand="md">
          <NavbarBrand tag={Link} to="/">Golden Clouds Tanning</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/contact">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/bookings">Bookings</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/signin">Sign in</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Navigation;

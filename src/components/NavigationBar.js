import React, { Component } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

export class NavigationBar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
        <Navbar.Brand href="#home">
          <img src={logo} alt="resort logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/rooms/">
              Rooms
            </Link>
            {/* <Link className="nav-link" to="/rooms/:singleroom">
              Single Room
            </Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;

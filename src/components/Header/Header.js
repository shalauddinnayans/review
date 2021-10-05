import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand>Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <NavLink className="head-nav-link" to="/home">
                Home
              </NavLink>
              <NavLink className="head-nav-link" to="/courses">
                Courses
              </NavLink>
              <NavLink className="head-nav-link" to="/about">
                About
              </NavLink>
              <NavLink className="head-nav-link" to="/Contact">
                Contact Us
              </NavLink>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;

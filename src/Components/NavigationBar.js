import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export default function NavigationBar () {
  return (
    <Navbar className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Recruiter Dashboard
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">
              Dashboard
            </Nav.Link>
            <Nav.Link as={NavLink} to="/pipeline">
              Candidate Pipeline
            </Nav.Link>
            <Nav.Link as={NavLink} to="/jobs">
              Job List
            </Nav.Link>
            <Nav.Link as={NavLink} to="/candidates">
              Candidate Tracker
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


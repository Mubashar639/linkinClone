import React from "react";
import {
  Container,
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  InputGroup
} from "react-bootstrap";
import Logo from "../../li-logo.png";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function NavBar() {
  return (
    <>
      <Navbar
        collapseOnSelect
        sticky="top"
        className="nav-li-bg justify-content-between"
        variant="light"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src={Logo}
              width="50"
              height="50"
              className="d-inline-block align-top li-logo-bg"
              alt="logo"
            />
          </Navbar.Brand>
          <Form inline>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                  <FaSearch />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Form>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar;

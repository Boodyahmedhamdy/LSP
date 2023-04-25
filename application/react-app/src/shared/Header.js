import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  const logout = () => {};
  return (
    <div className="">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link class="nav-link" to={"/"}>
              LSP
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link class="nav-link" to={"/"}>
              Books
            </Link>
            <Link class="nav-link" to={"/login"}>
              Login
            </Link>
            <Link class="nav-link" to={"/registration"}>
              Register
            </Link>
            <Link class="nav-link" to={"/borrowed-books"}>
              My books
            </Link>
          </Nav>

          <Nav className="ms-auto">
            <Nav.Link onClick={logout}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

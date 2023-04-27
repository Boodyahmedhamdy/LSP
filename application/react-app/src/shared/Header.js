import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "../css/Fonts.css";

const Header = () => {
  const logout = () => {};
  return (
    <div className="">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link
              class="nav-link"
              to={"/Start"}
              style={{ fontFamily: "Pacifico, cursive" }}
            >
              Books Cave
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
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Manage"
              menuVariant="dark"
            >
              <Link class="dropdown-item w-100" to={"/ManageBooks"}>
                Books
              </Link>
              <Link class="dropdown-item w-100" to={"/ManageUsers"}>
                Users accounts
              </Link>
              <Link class="dropdown-item w-100" to={"/ManageBorrowingRequests"}>
                Borrowed requests
              </Link>
              <NavDropdown.Divider />
            </NavDropdown>
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

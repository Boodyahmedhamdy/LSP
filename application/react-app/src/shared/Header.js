import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "../css/Fonts.css";
const localStorage =require("../helper/Local_storage");

const Header = () => {
  const navigate =useNavigate();
  const auth = localStorage.getAuthUser();
  const logout = () => {
    localStorage.removeAuthUser();
    navigate("/");
  }

  return (
    <div className="">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link
              class="nav-link"
              to={"/Start"}
              style={{ fontFamily: "Pacifico, cursive" }}>
              Books Cave
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">

          <Link class="nav-link" to={"/"}>
            Books
          </Link>
          
          {!auth && (
            <>
              <Link className="nav-link" to={"/login"}>
                Login
              </Link>
              <Link className="nav-link" to={"/registration"}>
                Register
              </Link>
            </>
          )}

          {auth && auth.role_id === 2 &&(
            <>
              <Link class="nav-link" to={"/borrowed-books"}>
                My books
              </Link>
              <Nav className="ms-auto">
                <Nav.Link onClick={logout}>Logout</Nav.Link>
              </Nav>
            </>
          )}

          {auth && auth.role_id ===1 && (
            <>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Manage"
              menuVariant="dark">
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
            <Nav className="ms-auto">
              <Nav.Link onClick={logout}>Logout</Nav.Link>
            </Nav>
            </>
          )}

          {auth && auth.role_id ===3 &&(
            <>
            <Nav className="ms-auto">
              <Nav.Link onClick={logout}>Logout</Nav.Link>
            </Nav>
            </>
          )}

          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

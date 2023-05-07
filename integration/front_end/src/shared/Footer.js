import React from "react";
import "../css/Footer.css";
import { Container } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer mt-auto">
      <Container>
        <a href="https://www.facebook.com" target="_blank">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com" target="_blank" className="insta">
          <FaInstagram />
        </a>
      </Container>
      <Link to={"/AboutUs"} className="nav-link py-3">
        About Us
      </Link>
      <p>All Copyright &copy; reserved to Books Cave</p>
    </div>
  );
};

export default Footer;

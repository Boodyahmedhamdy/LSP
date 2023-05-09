import React from "react";
import { Container, Image } from "react-bootstrap";
import "../../css/Start.css";
import "../../css/Fonts.css";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #F4481E, #005bea)",
        height: "100vh",
      }}
    >
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div>
          <h1
            style={{ fontFamily: "Aladin, cursive" }}
            className=" text-white display-1"
          >
            Books Cave
          </h1>
          <div className="d-flex justify-content-center">
            <Link
              className="btn btn-dark py-3 px-5 button"
              style={{ fontFamily: "Dancing Script, cursive" }}
              to={"/"}
            >
              Start
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;

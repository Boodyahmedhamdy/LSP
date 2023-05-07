import React from "react";
import "../../css/Fonts.css";

const AboutUs = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #F4481E, #005bea)",
        height: "100vh",
      }}
    >
      <h3 className="text-center text-white py-5">WHO WE ARE</h3>
      <div className="d-flex justify-content-center align-items-center">
        <h1
          style={{ fontFamily: "Aladin, cursive" }}
          className=" text-white display-1"
        >
          Books Cave
        </h1>
      </div>
      <h5 className="text-center text-white p-5">
        Books Cave is a library located in the heart of Cairo that offers a wide
        range of books for lending. The library has a vast collection of books
        in various genres, including fiction, non-fiction, and academic
        literature, catering to the diverse reading interests of its patrons.
        The library's lending services are affordable and flexible, allowing
        users to borrow books for a specified period and renew them if needed.
        The library also offers a comfortable reading environment, with cozy
        seating, ample lighting, and a peaceful atmosphere. The staff at Books
        Cave are knowledgeable and friendly, always ready to assist users in
        finding the right book. The library also hosts regular events, such as
        book clubs and author talks, providing a platform for book lovers to
        connect and engage with each other. With its extensive collection,
        lending services, and community events, Books Cave is a hub for
        literature enthusiasts in Cairo.
      </h5>
    </div>
  );
};

export default AboutUs;

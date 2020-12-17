import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Reservation = () => {
  return (
    <div
      className="alert alert-primary"
      role="alert"
      style={{ textAlign: "center" }}
    >
      <h3>Reservation confirmed, You will recieve a call within 24h.</h3>
      <h5>Thank you for your participation...</h5>
      <Link to="/">
        <Button className="back-button">Go Back</Button>
      </Link>
    </div>
  );
};

export default Reservation;

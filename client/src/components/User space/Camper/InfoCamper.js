import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Form, Col } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import Comment from "../Camper/Comment";
import CommentItem from "../Camper/CommentItem";
import { addBooking } from "../../../actions/bookingAction";
import { getHikes, getComment } from "../../../actions/hikeAction";
import("./camper.css");

const HikeInfo = ({ match }) => {
  const hikes = useSelector((state) => state.hikeReducer.hikes);
  const booked = useSelector((state) => state.hikeReducer.booked);
  const dispatch = useDispatch();
  const [booking, setBooking] = useState({
    fullName: "",
    place: "",
    phone: "",
  });
  const hikeId = match.params._id;
  useEffect(() => {
    dispatch(getHikes());
  }, [dispatch]);

  const { fullName, place, phone } = booking;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setBooking("");
  };
  const handleClick = () => {
    dispatch(addBooking(hikeId, { fullName, place, phone }));
  };

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };
  if (booked) {
    return <Redirect to="/reservation" />;
  }

  return (
    <div className="container-info">
      {hikes.map((hike) => (
        <div key={hikeId}>
          {hike._id === match.params._id ? (
            <div className="area-camper">
              <div className="more-info">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">About</th>
                      <th scope="col">Duration</th>
                      <th scope="col">Places available</th>
                      <th scope="col">Level of difficulty</th>
                      <th scope="col">Added by</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">{hike.desc}</th>
                      <td>{hike.duration}</td>
                      <td>{hike.nbPlaces}</td>
                      <td>{hike.difficulty}</td>
                      <td>
                        <span>{hike.firstName + " "}</span>
                        {hike.lastName}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <hr></hr>
                <div style={{ textAlign: "center" }}>
                  <h5>For more informations :</h5>
                  <p>{"+216" + hike.phone}</p>
                </div>
              </div>
              <div className="back">
                <Link to="/camper">
                  <Button className="info-button">Go Back</Button>
                </Link>
              </div>
              <div className="comments-items">
                <Comment hikeId={hikeId} />
                {hike.comments.map((comment) => (
                  <CommentItem comment={comment} key={hikeId} hikeId={hikeId} />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ))}

      <div className="booking-form">
        <h5>Make your reservation now</h5>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group as={Col} controlId="formPlaintextBook">
            <Form.Row>
              <Form.Label>Full name</Form.Label>
              <Form.Control
                value={fullName}
                name="fullName"
                placeholder="enter full name"
                onChange={(e) => handleChange(e)}
              />
            </Form.Row>
            <Form.Row>
              <Form.Label>Places desired</Form.Label>
              <Form.Control
                placeholder="enter number of places"
                value={place}
                name="place"
                onChange={(e) => handleChange(e)}
              />
            </Form.Row>
            <Form.Row>
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                value={phone}
                name="phone"
                placeholder="enter phone"
                onChange={(e) => handleChange(e)}
              />
            </Form.Row>
          </Form.Group>

          <Button className="info-button" onClick={() => handleClick()}>
            Confirm booking
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default HikeInfo;

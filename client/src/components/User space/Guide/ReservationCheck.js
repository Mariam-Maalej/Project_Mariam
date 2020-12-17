import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getHikes } from "../../../actions/hikeAction";

const Bookings = ({ match }) => {
  const hikes = useSelector((state) => state.hikeReducer.hikes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHikes());
  }, [dispatch]);
  const hikeId = match.params._id;
  return (
    <div className="reserved-container">
      {hikes.map((hike) => (
        <div>
          {hike._id === match.params._id ? (
            <div className="card-booking">
              {hike.bookings.map((booking) => (
                <div className="card" key={booking._id}>
                  <img
                    src="/Assets/reserved.jpg"
                    alt="reserved"
                    style={{ width: "200px" }}
                  />
                  <div className="container">
                    <h4>
                      <b>{booking.fullName}</b>
                    </h4>
                    <p>Places reserverd : {booking.place}</p>
                    <p>Phone : {booking.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      ))}
      <Link exact to={`/guide/${hikeId}`}>
        <Button className="info-button" style={{ marginLeft: "450px" }}>
          Go back
        </Button>
      </Link>
    </div>
  );
};

export default Bookings;

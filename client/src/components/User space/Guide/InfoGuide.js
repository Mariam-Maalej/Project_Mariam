import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getHikes } from "../../../actions/hikeAction";
import { getBooking } from "../../../actions/bookingAction";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Comment from "../Camper/Comment";
import CommentItem from "../Camper/CommentItem";
import { Redirect } from "react-router-dom";
import("./guide.css");

const InfoGuide = ({ match }) => {
  const hikes = useSelector((state) => state.hikeReducer.hikes);
  const check = useSelector((state) => state.hikeReducer.check);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);

  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );

  const hikeId = match.params._id;
  useEffect(() => {
    dispatch(getHikes());
  }, [dispatch]);

  return (
    <div className="container-info">
      {hikes.map((hike) => (
        <div>
          {hike._id === match.params._id ? (
            <div className="area-guide">
              <div className="more-info-guide">
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
                <div className="check-area">
                  {isAuthenticated && user._id === hike.user ? (
                    <Link to={`/allbookings/${hike._id}`}>
                      <Button
                        className="info-button"
                        onClick={() => dispatch(getBooking(hike._id))}
                      >
                        Check reservations
                      </Button>
                    </Link>
                  ) : null}
                </div>
              </div>
              <div className="back">
                <Link to="/guide">
                  <Button className="info-button">Go Back</Button>
                </Link>
              </div>
              <div className="comments-items">
                <Comment hikeId={hike._id} />
                {hike.comments.map((comment) => (
                  <CommentItem
                    comment={comment}
                    key={hike._id}
                    hikeId={hikeId}
                  />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default InfoGuide;

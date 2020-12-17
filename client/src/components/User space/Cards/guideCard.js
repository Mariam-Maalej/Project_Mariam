import React, { useState } from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteHike } from "../../../actions/hikeAction";
import EditModal from "../Guide/Modal";
import { addLike, removeLike } from "../../../actions/hikeAction";

const GuideCard = ({
  hike,
  imgURL,
  title,
  destination,
  desc,
  difficulty,
  date,
  duration,
  price,
  nbPlaces,
}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);

  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );
  const [newImgURL, setNewImgURL] = useState(imgURL);
  const [newTitle, setNewTitle] = useState(title);
  const [newDestination, setNewDestination] = useState(destination);
  const [newDesc, setNewDesc] = useState(desc);
  const [newDiff, setNewDiff] = useState(difficulty);
  const [newDate, setNewDate] = useState(date);
  const [newDuration, setNewDuration] = useState(duration);
  const [newPrice, setNewPrice] = useState(price);
  const [newNbPlaces, setNewNbPlaces] = useState(nbPlaces);

  return (
    <div className="hike-container">
      <Card style={{ width: "300px" }} className="hikeCard">
        <Card.Img variant="top" className="cardImg" src={hike.imgURL} />
        <Card.Body>
          {/* Add like */}
          <i
            className="fas fa-thumbs-up"
            onClick={() => dispatch(addLike(hike._id))}
          ></i>
          <span>
            {hike.likes.length > 0 && <span>{hike.likes.length}</span>}
          </span>
          {/*  Remove like*/}
          <i
            onClick={() => dispatch(removeLike(hike._id))}
            className="fas fa-thumbs-down"
          ></i>
          <Card.Title>{hike.title}</Card.Title>
          <Card.Text>Destination : {hike.destination}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <p>{hike.date}</p>
          </ListGroupItem>
          {/* edit modal */}
          {isAuthenticated && user._id === hike.user ? (
            <div className="edit">
              <EditModal
                hike={hike}
                newImgURL={newImgURL}
                newTitle={newTitle}
                newDestination={newDestination}
                newDesc={newDesc}
                newDiff={newDiff}
                newDate={newDate}
                newDuration={newDuration}
                newPrice={newPrice}
                newNbPlaces={newNbPlaces}
                setNewImgURL={setNewImgURL}
                setNewTitle={setNewTitle}
                setNewDestination={setNewDestination}
                setNewDesc={setNewDesc}
                setNewDiff={setNewDiff}
                setNewDate={setNewDate}
                setNewDuration={setNewDuration}
                setNewPrice={setNewPrice}
                setNewNbPlaces={setNewNbPlaces}
                edit={true}
              />
              <div>
                <i
                  className="fas fa-minus-circle"
                  onClick={() => dispatch(deleteHike(hike._id))}
                ></i>
                <span>Delete</span>
              </div>
            </div>
          ) : null}
        </ListGroup>
        <Card.Body>
          <Link to={`/guide/${hike._id}`}>
            <Button className="card-button">See more</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default GuideCard;

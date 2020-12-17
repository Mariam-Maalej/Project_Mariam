import React from "react";
import { useDispatch } from "react-redux";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addLike, removeLike } from "../../../actions/hikeAction";

const CamperCard = ({ hike }) => {
  const dispatch = useDispatch();

  return (
    <div className="hike-container">
      <Card style={{ width: "300px" }} className="hikeCard">
        <Card.Img variant="top" className="cardImg" src={hike.imgURL} />
        <Card.Body>
          <div>
            {/* Add like */}
            <i
              className="fas fa-thumbs-up"
              onClick={() => dispatch(addLike(hike._id))}
            ></i>
            {hike.likes.length > 0 && <span>{hike.likes.length}</span>}
            {/*  Remove like*/}
            <i
              onClick={() => dispatch(removeLike(hike._id))}
              className="fas fa-thumbs-down"
            ></i>
          </div>

          <Card.Title>{hike.title}</Card.Title>
          <Card.Text>Destination : {hike.destination}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem className="card">
            <p>{hike.date}</p>
          </ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Link exact to={`/camper/${hike._id}`}>
            <Button className="card-button"> See more</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CamperCard;

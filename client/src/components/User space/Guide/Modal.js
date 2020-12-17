import React, { useState } from "react";
import { Modal, Button, Form, Col, Card } from "react-bootstrap";
import { addHike, editHike } from "../../../actions/hikeAction";
import { useDispatch } from "react-redux";
import "./guide.css";

const GuideModal = ({
  edit,
  hike,
  imgURL,
  setImgURL,
  title,
  setTitle,
  destination,
  setDestination,
  desc,
  setDesc,
  difficulty,
  setDifficulty,
  date,
  setDate,
  duration,
  setDuration,
  price,
  setPrice,
  nbPlaces,
  setNbPlaces,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  //edit initial values
  const [newImgURL, setNewImgURL] = useState(imgURL);
  const [newTitle, setNewTitle] = useState(title);
  const [newDestination, setNewDestination] = useState(destination);
  const [newDesc, setNewDesc] = useState(desc);
  const [newDiff, setNewDiff] = useState(difficulty);
  const [newDate, setNewDate] = useState(date);
  const [newDuration, setNewDuration] = useState(duration);
  const [newPrice, setNewPrice] = useState(price);
  const [newNbPlaces, setNewNbPlaces] = useState(nbPlaces);
  // Handle add
  const handleAdd = () => {
    dispatch(
      addHike({
        imgURL,
        title,
        destination,
        desc,
        difficulty,
        date,
        duration,
        price,
        nbPlaces,
      })
    );
    handleClose();
    setImgURL("");
    setTitle("");
    setDestination("");
    setDesc("");
    setDifficulty("");
    setDate("");
    setDuration("");
    setPrice();
    setNbPlaces();
  };
  // Handle Edit
  const handleEdit = () => {
    dispatch(
      editHike(hike._id, {
        imgURL: newImgURL,
        title: newTitle,
        destination: newDestination,
        desc: newDesc,
        difficulty: newDiff,
        date: newDate,
        duration: newDuration,
        price: newPrice,
        nbPlaces: newNbPlaces,
      })
    );
    handleClose();
    edit = false;
  };

  return (
    <div>
      <>
        {edit ? (
          <div>
            <i className="fas fa-edit" onClick={handleShow}></i>
            <span>Edit</span>
          </div>
        ) : (
          <div className="Add">
            <h4>
              Add new hikes. <hr></hr>Campers are waiting for new experiences !
            </h4>
            <Card className="modal-add">
              <Card.Img
                style={{ width: "200px" }}
                variant="top"
                src="Assets/camp6.jpg"
              />
              <Card.Body>
                <Card.Text>
                  <i
                    className="fas fa-plus-circle"
                    id="add"
                    onClick={handleShow}
                  ></i>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        )}
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          size="lg"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{edit ? "Edit Hike" : "Add hike"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridimg">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="imgURL"
                    placeholder={edit ? null : "enter image URL..."}
                    onChange={(e) =>
                      edit
                        ? setNewImgURL(e.target.value)
                        : setImgURL(e.target.value)
                    }
                    value={edit ? newImgURL : imgURL}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridtitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="title"
                    placeholder={edit ? null : "Enter title"}
                    onChange={(e) =>
                      edit
                        ? setNewTitle(e.target.value)
                        : setTitle(e.target.value)
                    }
                    value={edit ? newTitle : title}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGriddesc">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    placeholder={edit ? null : "enter description"}
                    onChange={(e) =>
                      edit
                        ? setNewDesc(e.target.value)
                        : setDesc(e.target.value)
                    }
                    value={edit ? newDesc : desc}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGriddestination">
                  <Form.Label>Destination</Form.Label>
                  <Form.Control
                    type="destination"
                    placeholder={edit ? null : "enter destination"}
                    onChange={(e) =>
                      edit
                        ? setNewDestination(e.target.value)
                        : setDestination(e.target.value)
                    }
                    value={edit ? newDestination : destination}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGriddate">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    placeholder={edit ? null : "dd-mm-yyyy"}
                    onChange={(e) =>
                      edit
                        ? setNewDate(e.target.value)
                        : setDate(e.target.value)
                    }
                    value={edit ? newDate : date}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridduration">
                  <Form.Label>Duration</Form.Label>
                  <Form.Control
                    placeholder={edit ? null : "exp : n days"}
                    onChange={(e) =>
                      edit
                        ? setNewDuration(e.target.value)
                        : setDuration(e.target.value)
                    }
                    value={edit ? newDuration : duration}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridprice">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    placeholder={edit ? null : "enter price"}
                    onChange={(e) =>
                      edit
                        ? setNewPrice(e.target.value)
                        : setPrice(e.target.value)
                    }
                    value={edit ? newPrice : price}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGriddiff">
                  <Form.Label>Difficulty level</Form.Label>
                  <Form.Control
                    as="select"
                    placeholder={edit ? null : "enter difficulty level"}
                    onChange={(e) =>
                      edit
                        ? setNewDiff(e.target.value)
                        : setDifficulty(e.target.value)
                    }
                    value={edit ? newDiff : difficulty}
                  >
                    <option value="Choose" selected>
                      Choose difficulty
                    </option>
                    <option value="Easy">Easy</option>
                    <option value="Average">Average</option>
                    <option value="Difficult">Difficult</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridplaces">
                  <Form.Label>Places available</Form.Label>
                  <Form.Control
                    placeholder={edit ? null : "enter number of places"}
                    onChange={(e) =>
                      edit
                        ? setNewNbPlaces(e.target.value)
                        : setNbPlaces(e.target.value)
                    }
                    value={edit ? newNbPlaces : nbPlaces}
                  />
                </Form.Group>
              </Form.Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={edit ? handleEdit : handleAdd}>
              {edit ? "Edit" : "Add"}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default GuideModal;

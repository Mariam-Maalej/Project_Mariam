import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Col, Button } from "react-bootstrap";
import "./RegisterForm.css";
import { Link, Redirect } from "react-router-dom";
import { register } from "../../../actions/authAction";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );

  const [formReg, setFormReg] = useState({
    firstName: "",
    lastName: "",
    adress: "",
    email: "",
    phone: "",
    password: "",
    status: "",
  });
  const {
    firstName,
    lastName,
    adress,
    email,
    phone,
    password,
    status,
  } = formReg;
  const onChange = (e) =>
    setFormReg({ ...formReg, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      register({ firstName, lastName, adress, email, phone, password, status })
    );
  };
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div className="register-container">
      <div className="register-form">
        <div>
          <img src="/Assets/login.jpg" alt="register"></img>
        </div>
        <div className="reg-form">
          <h2 className="title">Create Account</h2>
          <Form className="register-user" onSubmit={(e) => onSubmit(e)}>
            <Form.Row>
              <Form.Group as={Col} controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  className="form-item"
                  type="text"
                  placeholder="First name..."
                  name="firstName"
                  value={firstName}
                  onChange={(e) => onChange(e)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="lastname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  className="form-item"
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => onChange(e)}
                  placeholder="Last name..."
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="phone">
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                  className="form-item"
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={(e) => onChange(e)}
                  placeholder="Phone..."
                />
              </Form.Group>
              <Form.Group as={Col} controlId="adress">
                <Form.Label>Adress</Form.Label>
                <Form.Control
                  className="form-item"
                  type="text"
                  name="adress"
                  value={adress}
                  onChange={(e) => onChange(e)}
                  placeholder="Adress..."
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="email">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  className="form-item"
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                  placeholder="Email..."
                />
              </Form.Group>
              <Form.Group as={Col} controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="form-item"
                  type="text"
                  name="password"
                  value={password}
                  onChange={(e) => onChange(e)}
                  placeholder="Password..."
                />
              </Form.Group>
            </Form.Row>
            <label>Status</label>
            <select
              className="form-control"
              name="status"
              onChange={(e) => onChange(e)}
            >
              <option selected>Choose your status...</option>
              <option value="Participant">Participant</option>
              <option value="Guide">Guide</option>
            </select>

            <hr></hr>
            <h5>
              Already have an account? <Link to="/login">Sign In</Link>
            </h5>
            <Button
              variant="primary"
              className="register-button"
              type="submit"
              value="register"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Col, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../../actions/authAction";
import "./loginForm.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );
  const [formLog, setFormLog] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formLog;
  const onChange = (e) =>
    setFormLog({ ...formLog, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  const isRevealPassword = false;
  return (
    <div className="login-form-container">
      <div className="login1">
        <div>
          <img
            alt="login"
            className="login-pic"
            src="./Assets/login2.jpg"
          ></img>
        </div>
        <div className="form-login">
          <Form className="login-user" onSubmit={(e) => onSubmit(e)}>
            <h2 className="title">Account Login</h2>
            <Form.Row>
              <Form.Group as={Col} controlId="email">
                <Form.Control
                  className="form-item"
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                  placeholder="Email.."
                />
              </Form.Group>
              <Form.Group as={Col} controlId="password">
                <Form.Control
                  className="form-item"
                  name="password"
                  value={password}
                  type={isRevealPassword ? "text" : "password"}
                  onChange={(e) => onChange(e)}
                  placeholder="Password.."
                />
              </Form.Group>
            </Form.Row>
            <Form.Group as={Col} controlId="submit">
              <hr></hr>
              <h5>
                Don't have an account? <Link to="/register">Sign Up</Link>
              </h5>{" "}
              <Button className="login-button" type="submit" value="login">
                Submit
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

import React from "react";
import { logout } from "../../actions/authAction";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Navbar.css";

const Navb = ({ authReducer: { isAuthenticated }, user, logout }) => {
  const guideLinks = (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <a href="#!">Discover </a>
        <ul className="dropdown">
          <li>
            <Link to="/destinations">Best destinations</Link>
          </li>
          <li>
            <Link to="/links">Useful links</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/guide">Guide space</Link>
      </li>
      <li>
        {" "}
        <a href="#!" onClick={logout}>
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );
  const camperLinks = (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <a href="#!">Discover </a>
        <ul className="dropdown">
          <li>
            <Link to="/destinations">Best destinations</Link>
          </li>
          <li>
            <Link to="/links">Useful links</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/camper">Camper space</Link>
      </li>
      <li>
        {" "}
        <a href="#!" onClick={logout}>
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link exact to="/">
          Home
        </Link>
      </li>
      <li>
        <a href="#!">Discover </a>
        <ul className="dropdown">
          <li>
            <Link to="/destinations">Best destinations</Link>
          </li>
          <li>
            <Link to="/links">Useful links</Link>
          </li>
        </ul>
      </li>
      <span className="user-space">
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </span>
    </ul>
  );

  return (
    <div>
      <nav role="navigation" className="primary-navigation">
        {!isAuthenticated
          ? guestLinks
          : isAuthenticated && user.status === "Guide"
          ? guideLinks
          : camperLinks}
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  authReducer: state.authReducer,
  user: state.authReducer.user,
  hikes: state.hikeReducer.hikes,
});

export default connect(mapStateToProps, { logout })(Navb);

import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authAction";
import setAuthToken from "./helpers/setAuthToken";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/auth/Login-form/loginForm";
import Register from "./components/auth/Register-form/RegisterForm";
import Destinations from "./components/Discover/Destinations";
import Links from "./components/Discover/Links";
import Guide from "./components/User space/Guide/guide";
import Camper from "./components/User space/Camper/camper";
import Footer from "./components/Footer/Footer";
import InfoCamper from "./components/User space/Camper/InfoCamper";
import InfoGuide from "./components/User space/Guide/InfoGuide";
import PrivateRoute from "./components/routing/PrivateRoute";
import Reservation from "./components/User space/Camper/Reservation";
import ReservationCheck from "./components/User space/Guide/ReservationCheck";
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/destinations" component={Destinations} />
            <Route exact path="/links" component={Links} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute exact path="/camper" component={Camper} />
            <PrivateRoute exact path="/guide" component={Guide} />
            <PrivateRoute exact path="/camper/:_id" component={InfoCamper} />
            <PrivateRoute exact path="/guide/:_id" component={InfoGuide} />
            <PrivateRoute exact path="/reservation" component={Reservation} />
            <PrivateRoute
              exact
              path="/allbookings/:_id"
              component={ReservationCheck}
            />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;

import React from "react";
import("./Home.css");

const Home = () => {
  return (
    <div className="grid-container">
      <div className="a1">
        <img alt="camping" className="pic" src="/Assets/camp1.jpg"></img>
      </div>
      <div className="a2">
        <div className="head">
          <h2 className="title">Camping is always the answer !</h2>

          <p className="body-desc">
            Life is a great adventure, Let's live it ..<br></br>
            There is nothing better than breathing pure air in a camping night
            under stars or hiking with friends, feeling the joy seeing a
            miracilous view from mountain peek.
          </p>
        </div>
        <img alt="camping" className="pic" src="/Assets/113.jpg"></img>
      </div>
      <div className="a3">
        <img alt="camping" className="pic" src="/Assets/camp3.jpg"></img>
      </div>
      <div className="main">
        {" "}
        <img
          src="/Assets/montagne.jpg"
          alt="camping"
          className="main-pic"
        ></img>
        <p className="home-desc">
          <h2 className="title">TuniCamp</h2>
          <h3>Discover..Explore..Dream..</h3>
        </p>
      </div>
    </div>
  );
};

export default Home;

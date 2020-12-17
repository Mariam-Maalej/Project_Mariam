import React from "react";
import "./Links.css";

const Links = () => {
  return (
    <div>
      <div className="container-links">
        <div className="links">
          <h2 className="title">Your guide to have a perfect camp!</h2>
          <div className="Links-desc">
            <p>
              When you're packing for a camping trip, you're typically thinking
              about necessary tools to bring. You'll pack heavy stuff but it's
              probable to forget some details. This section will contain some
              links and tricks that would be useful for you, camping-lovers in
              order to have a comfortable and a perfect trip.
            </p>
          </div>
        </div>
        <div className="pic-tools">
          <img className="img-links" alt="tools" src="/Assets/tools.jpg"></img>
          <img className="img-links" alt="tools" src="/Assets/tools2.jpg"></img>
        </div>
        <div className="links">
          <h2 className="title">Where to find camping tools?</h2>
          <div className="links-desc">
            <p>
              To have a perfect camping travel , you need some tools that fit
              with the nature of the destination you're going to. Here are some
              important camping tools which can help you live a successful
              experience.
            </p>
            <ul>
              <div className="tools">
                <div>
                  {" "}
                  <li>Ultra Comfortable Sleeping Bag</li>
                  <li>Pocket Blanket</li>
                  <li>Portable Soft Cooler Bag</li>
                </div>
                <div>
                  {" "}
                  <li>First Aid Flashlight</li>
                  <li>Cooking Material</li>
                  <li>Survival Folding Knife</li>
                </div>
              </div>
            </ul>
            <p>
              All those tools are available in camping shops and are necessary
              for a comfortamble trip.
            </p>
            <p>
              The links below are some useful links for camping tools shops,
              they may help you find your best camping package
            </p>
            <ul>
              <li>
                {" "}
                <a href="https://www.decathlon.tn/17918-accessoires-de-camping">
                  Decalthon
                </a>
              </li>
              <li>
                {" "}
                <a href="https://www.marhba.com/lifestyle/le-materiel-necessaire-pour-un-camping-reussi-en-tunisie">
                  Marhba lifestyle
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="https://www.facebook.com/groups/Rando.camping.tunisie/">
                  Rando Camping Tunisia
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;

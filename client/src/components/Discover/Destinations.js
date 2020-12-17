import React from "react";
import("./Destinations.css");

const destinations = [
  {
    id: 1,
    name: "Tunis",
    img: (
      <img
        src="https://resize.prod.femina.ladmedia.fr/rblr/652,438/img/var/2020-02/sidi-bou-sai-d.jpg"
        alt="tunis"
        className="city-pic"
      ></img>
    ),
    desc:
      "Sidi Bou Said is a village located about twenty kilometers north-east of Tunis. Perched on a cliff overlooking Carthage and the Gulf of Tunis, it bears the name of a saint: Sidi Bou Saïd El Beji.",
  },
  {
    id: 2,
    name: "Hammamet",
    img: (
      <img
        src="https://img-4.linternaute.com/OqLfCE9eKGNuN8EGpMdaAijbY2Q=/660x366/smart/ace0ccda95794a1d972c15a65a0da28d/ccmcms-linternaute/11643179.jpg"
        alt="hamamet"
        className="city-pic"
      ></img>
    ),
    desc:
      "Sidi Bou Said is a village located about twenty kilometers north-east of Tunis. Perched on a cliff overlooking Carthage and the Gulf of Tunis, it bears the name of a saint: Sidi Bou Saïd El Beji.",
  },
  {
    id: 3,
    name: "Tabarka",
    img: (
      <img
        src="https://www.planetware.com/photos-large/TUN/tunisia-tabarka-genoese-fort.jpg"
        alt="tabarka"
        className="city-pic"
      ></img>
    ),
    desc:
      "Tabarka is a coastal town located in north-western Tunisia, close to the border with Algeria. Tabarka's history is a mosaic of Berber, Punic, Hellenistic, Roman, Arabic, Genoese and Turkish culture. The town is dominated by an offshore rock on which is remains a Genoese castle. ",
  },
  {
    id: 4,
    name: "Beni Mtir",
    img: (
      <img
        src="https://www.voyage-tunisie.info/wp-content/uploads/2017/11/bni-mtir.jpg"
        alt="beniMtir"
        className="city-pic"
      ></img>
    ),
    desc:
      "Beni M’Tir ou Beni Metir est un village du Nord-Ouest de la Tunisie situé dans la région montagneuse de Kroumirie à quelques kilomètres d’Aïn Draham.",
  },
  {
    id: 5,
    name: "Sbeitla",
    img: (
      <img
        src="https://lp-cms-production.imgix.net/2019-06/59638c40197132de55684393b06d50a3-sufetula.jpg"
        alt="sbeitla"
        className="city-pic"
      ></img>
    ),
    desc:
      "One of North Africa's best-preserved ancient Roman cities, Sufetula is awash with temples, monumental arches and bath complexes that speak of an ancient civilisation that knew how to live.",
  },
  {
    id: 6,
    name: "Ghar el melh",
    img: (
      <img
        src="https://prod.bravebooking.net/clients/BH30943/media/photos/sejour/2/Excursion_1_Journee_Ghar_El_Melh_1.jpg"
        alt="bizerte"
        className="city-pic"
      ></img>
    ),
    desc:
      "Ghar El Melh is a pretty village of 5,000 inhabitants, known for its historic site and the long beach of Sidi Ali El Mekki located five kilometers to the east.",
  },
  {
    id: 7,
    name: "Oued Zen",
    img: (
      <img
        src="https://www.voyage-tunisie.info/wp-content/uploads/2017/11/RandonneeOued-ZenA%C3%AFn-Drahiim.jpg"
        alt="ouedZen"
        className="city-pic"
      ></img>
    ),
    desc:
      "Oued Zen National Park is a Tunisian national park located in the delegation of Ain Draham, about 200 kilometers west of Tunis and about fifty kilometers west of Jendouba.",
  },
  {
    id: 8,
    name: "Zaghouan mountain",
    img: (
      <img
        src="https://www.amazing-tunisia.com/fr/wp-content/uploads/2016/04/zaghouan-810x540.jpg"
        alt="zaghouan"
        className="city-pic"
      ></img>
    ),
    desc:
      "Jebel Zaghouan is a mountain located in the north-eastern part of the Tunisian ridge. It rises to 1,295 meters at the top of Ras El Gassâa. About fifty kilometers from Tunis, the city of Zaghouan is located below its northern slope.",
  },
];

const Destinations = () => {
  return (
    <div className="discover-container">
      <div className="discover-head">
        <h2 className="title">Where to go in Tunisia?</h2>
        <p className="head-description">
          A good choice for a trip is also a good experience to gain. It's very
          important to know where to go before thinking of a trip or a hike.
          Disovering different places and type of activities let you have a good
          choice and leave a perfect experience. So let's discover Tunisia and
          contemplate wonderful landscapes between desert and Mediterranean Sea.
          There is a large number of places to discover, here are the 8 most
          beautiful ones.
        </p>
      </div>
      <div className="city-card">
        {destinations.map((destination) => (
          <div key={destination.id} className="city-content">
            {destination.img}
            <div className="city-description">
              <h3>{destination.name}</h3>
              {destination.desc}
            </div>
          </div>
        ))}
      </div>
      <div className="activities.container">
        <div className="activities">
          <h2 className="title">What type of activities ?</h2>
          <div className="activity-desc">
            <p>
              We offer different types of hikes with varying levels of
              difficulty depending on the circuit: the length of the route and
              the type of territory (mountain, mid-mountain, coasts and cultural
              destinations).{" "}
            </p>
            <p>
              The satisfaction of the hiker is our first goal, we take care of
              the quality of the hiker's stay as well as the safety of our
              customers. Your trust means a lot to us.
            </p>
            <h4>Types of activities :</h4>
            <ul>
              <li>
                Hiking : It's meant to be a long walk through Tunisian forests
                or in the country's healthy paths dedicated for walkers.
              </li>
              <li>
                Mountain hiking : It's one of the most challenging hikes that
                needs some additional effort but it's very entertaining and can
                spread so much energy. It envolves so many activities in one
                such us walking, climbing and slow running.
              </li>
              <li>
                Cycling : We have many large space dedicated for cycling lovers,
                it's one of the most loved sport in Tunisia. This activity can
                be organised as cycling competion or just for entertainment as a
                group of friends.
              </li>
              <li>
                Cultural activities : If you are curious and history lover,
                Tunisia holds a large number of musuems and precious
                archeological sites that are rich of historical details.{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="photos-activities">
        <img alt="activity" className="ph-act" src="./Assets/camp8.jpg"></img>
        <img alt="activity" className="ph-act" src="./Assets/camp4.jpg"></img>
        <img alt="activity" className="ph-act" src="./Assets/tunisia.jpg"></img>
        <img alt="activity" className="ph-act" src="./Assets/history.jpg"></img>
        <img alt="activity" className="ph-act" src="./Assets/tunis.jpg"></img>
      </div>
    </div>
  );
};

export default Destinations;

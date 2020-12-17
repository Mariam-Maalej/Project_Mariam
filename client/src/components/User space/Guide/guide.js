import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getHikes } from "../../../actions/hikeAction";
import GuideCard from "../Cards/guideCard";
import "./guide.css";
import AddModal from "./Modal";
import Search from "../../Search/Search";

const Guide = () => {
  const hikes = useSelector((state) => state.hikeReducer.hikes);
  const dispatch = useDispatch();
  const [imgURL, setImgURL] = useState("");
  const [title, setTitle] = useState("");
  const [destination, setDestination] = useState("");
  const [desc, setDesc] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState();
  const [nbPlaces, setNbPlaces] = useState();
  const [nameSearch, setNameSearch] = useState("");
  const [difficultySearch, setDifficultySearch] = useState("");

  useEffect(() => {
    dispatch(getHikes());
  }, [dispatch]);

  return (
    <div>
      <div className="search-bar">
        <Search
          setNameSearch={setNameSearch}
          setDifficultySearch={setDifficultySearch}
        />
      </div>
      <div className="hikes-list">
        {hikes
          .filter(
            (hike) =>
              hike.destination
                .toLowerCase()
                .includes(nameSearch.toLowerCase()) &&
              hike.difficulty
                .toLowerCase()
                .includes(difficultySearch.toLowerCase())
          )
          .map((hike) => (
            <div key={hike._id}>
              <GuideCard
                hike={hike}
                imgURL={imgURL}
                title={title}
                destination={destination}
                desc={desc}
                difficulty={difficulty}
                date={date}
                duration={duration}
                price={price}
                nbPlaces={nbPlaces}
              />
            </div>
          ))}
      </div>
      <div>
        <AddModal
          imgURL={imgURL}
          setImgURL={setImgURL}
          title={title}
          setTitle={setTitle}
          destination={destination}
          setDestination={setDestination}
          desc={desc}
          setDesc={setDesc}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          date={date}
          setDate={setDate}
          duration={duration}
          setDuration={setDuration}
          price={price}
          setPrice={setPrice}
          nbPlaces={nbPlaces}
          setNbPlaces={setNbPlaces}
          edit={false}
        />
      </div>
    </div>
  );
};

export default Guide;

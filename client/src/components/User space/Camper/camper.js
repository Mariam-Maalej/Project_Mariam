import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getHikes } from "../../../actions/hikeAction";
import CamperCard from "../Cards/camperCard";
import "./camper.css";
import Search from "../../Search/Search";

const Camper = () => {
  const hikes = useSelector((state) => state.hikeReducer.hikes);
  const dispatch = useDispatch();
  const [nameSearch, setNameSearch] = useState("");
  const [difficultySearch, setDifficultySearch] = useState("");

  useEffect(() => {
    dispatch(getHikes());
  }, [dispatch]);
  return (
    <div className="hikes-container">
      <div className="search-bar">
        <Search
          setNameSearch={setNameSearch}
          setDifficultySearch={setDifficultySearch}
        />
      </div>
      {hikes !== [] ? (
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
                <CamperCard hike={hike} />
              </div>
            ))}
        </div>
      ) : (
        <h2>
          There is no hikes available until this date, new ones will be
          available soon, Stay branched !{" "}
        </h2>
      )}
    </div>
  );
};
export default Camper;

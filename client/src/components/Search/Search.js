import React from "react";
import "./Search.css";

const Search = ({ setNameSearch, setDifficultySearch }) => {
  const handleChange = (e) => {
    setNameSearch(e.target.value);
  };

  const handleSearch = (e) => {
    setDifficultySearch(e.target.value);
  };

  return (
    <form className="search">
      {/* Search by destination */}
      <input
        type="text"
        placeholder="Search destination .."
        className="search-input"
        onChange={handleChange}
      ></input>
      {/* Search by level of difficulty */}
      <select className="search-input" onChange={handleSearch} >
        <option className="default" selected style={{ color: "gray" }}>
          Search by difficulty level..
        </option>
        <option value="Easy">Easy</option>
        <option value="Average">Average</option>
        <option value="Difficult">Difficult</option>
      </select>

      <i className="fas fa-search search-icon fa-lg"></i>
    </form>
  );
};

export default Search;

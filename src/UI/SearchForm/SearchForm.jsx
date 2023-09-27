import "./searchForm.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function SearchForm({ showSearchForm }) {
  SearchForm.propTypes = {
    showSearchForm: PropTypes.string.isRequired,
  };
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/shop?search=${searchValue}`);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={`search-form ${showSearchForm === true ? "show" : ""}`}
    >
      <div className="form-wrapper flex">
        <input
          type="text"
          placeholder="Search Products"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button type="submit" onClick={handleSearch}>
          <AiOutlineSearch className="searchButtonIcon" />
        </button>
      </div>
    </form>
  );
}

export default SearchForm;

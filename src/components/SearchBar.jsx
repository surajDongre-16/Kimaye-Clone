import React, { useState } from "react";
import "./searchbar.css";
import {
  CloseIcon,
  Search2Icon,
  SearchIcon,
  SmallCloseIcon,
} from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

function SearchBar({ placeholder, data }) {
  const navigate = useNavigate();
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setWordEntered("");
    setFilteredData([]);
  };

  const handleClick = (id) => {
    navigate(`/allfruits/${id}`);
    setWordEntered("");
    setFilteredData([]);
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          className="form-control me-2 shadow-none searchInput"
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div
          className={wordEntered.length === 0 ? "display-none" : "searchIcon"}
        >
          <SmallCloseIcon id="clearBtn" onClick={clearInput} />
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 5).map((value, key) => {
            return (
              <div className="dataItem" key={key}>
                <div className="dataItem_img">
                  <img src={value.image} alt="item-image" />
                </div>
                <div className="dataItem_content">
                  <p
                    className="dataItem_name"
                    onClick={() => handleClick(value.id)}
                  >
                    {value.name}
                  </p>
                  <p>{value.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;

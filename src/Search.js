import React, { useState } from "react";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

export default function Search(props) {
  const [searchValue, setSearchValue] = useState("");
  const [isToggledValue, setToggleValue] = useState(false);

  function searchInput(event) {
    setSearchValue(event.target.value);
  }

  return (
    <div className={`Search ${props.tempStatus}`}>
      <form
        className="search-bar"
        autoComplete="off"
        onSubmit={(event) => {
          event.preventDefault();
          if (props.moduleStatus === "placeholderModule") {
            props.embedContent();
          }
          props.searchTrigger(searchValue, isToggledValue);
        }}
      >
        <input
          type="search"
          name="city-search"
          placeholder="Please enter city..."
          className="city-search-bar"
          onChange={searchInput}
          value={searchValue}
        />
        <input type="submit" value="Search" className="city-search-button" />
      </form>
      <div>
        <button
          className="location-button"
          onClick={(event) => {
            event.preventDefault();
            if (props.moduleStatus === "placeholderModule") {
              props.embedContent();
            }
            props.currentLocationButton(isToggledValue);
          }}
        >
          <FontAwesomeIcon icon={Icons.faLocationArrow} />
        </button>
      </div>
      <div className="form-check form-switch unit-switch">
        <input
          className="form-check-input unit-toggle"
          type="checkbox"
          id="flexSwitchCheckDefault"
          value={isToggledValue}
          onChange={() => {
            setToggleValue(!isToggledValue);
            props.tempToggle(!isToggledValue);
          }}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          °C / °F
        </label>
      </div>
    </div>
  );
}

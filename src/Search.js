import React from "react";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

export default function Search(props) {
  return (
    <div className={`Search ${props.tempStatus}`}>
      <form className="search-bar" autoComplete="off">
        <input
          type="search"
          name="city-search"
          placeholder="Please enter city..."
          className="city-search-bar"
        />
        <input type="submit" value="Search" className="city-search-button" />
      </form>
      <div>
        <button className="location-button">
          <FontAwesomeIcon icon={Icons.faLocationArrow} />
        </button>
      </div>
      <div className="form-check form-switch unit-switch">
        <input
          className="form-check-input unit-toggle"
          type="checkbox"
          id="flexSwitchCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          °C / °F
        </label>
      </div>
    </div>
  );
}

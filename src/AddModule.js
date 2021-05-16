import React from "react";
import "./AddModule.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

export default function AddModule() {
  return (
    <section className="AddModule" id="add-module-section">
      <button className="plus-icon icon" id="add-module-button">
        <FontAwesomeIcon icon={Icons.faPlus} />
      </button>
    </section>
  );
}

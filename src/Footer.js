import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <a
        href="https://github.com/fcaud/Weather-App-React"
        target="_blank"
        rel="noreferrer"
        className="code-source-link"
      >
        Open-source code
      </a>
      <p className="link-text"> by </p>
      <a
        href="https://www.linkedin.com/in/freya-caudwell-a24a03a4/"
        target="_blank"
        rel="noreferrer"
        className="linkedin-link"
      >
        Freya Caudwell
      </a>
    </div>
  );
}

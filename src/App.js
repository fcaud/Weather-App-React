import React, { useState } from "react";
import "./App.css";
import AddModule from "./AddModule";
import Module from "./Module";
import Header from "./Header";
import Footer from "./Footer";
import HeaderSpacing from "./HeaderSpacing";

export default function App() {
  const [date, setDate] = useState(null);

  return (
    <div className="App container">
      <Header date={date} />
      <HeaderSpacing />
      <Module
        moduleID="liveModule"
        city="London"
        tempStatus="weather-cold"
        updateDate={(newDate) => {
          setDate(newDate);
        }}
      />
      <Module
        moduleID="liveModule"
        city="Madrid"
        tempStatus="weather-hot"
        updateDate={(newDate) => {
          setDate(newDate);
        }}
      />
      <Module
        moduleID="placeholderModule"
        updateDate={(newDate) => {
          setDate(newDate);
        }}
      />
      <AddModule />
      <Footer />
    </div>
  );
}

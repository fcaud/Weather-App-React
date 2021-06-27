import React, { useState } from "react";
import "./App.css";
import AddModule from "./AddModule";
import Module from "./Module";
import Header from "./Header";
import Footer from "./Footer";
import HeaderSpacing from "./HeaderSpacing";

export default function App() {
  const [date, setDate] = useState(null);
  const [modules, setModules] = useState([
    { moduleStatus: "liveModule", city: "London", tempStatus: "weather-cold" },
    { moduleStatus: "liveModule", city: "Madrid", tempStatus: "weather-hot" },
    { moduleStatus: "placeholderModule" },
  ]);
  return (
    <div className="App container">
      <Header date={date} />
      <HeaderSpacing />
      {modules.map((module, index) => (
        <Module
          key={index}
          moduleStatus={module.moduleStatus}
          city={module.city}
          tempStatus={module.tempStatus}
          updateDate={(newDate) => {
            setDate(newDate);
          }}
        />
      ))}
      <AddModule
        addModule={() => {
          setModules([...modules, { moduleStatus: "placeholderModule" }]);
        }}
      />
      <Footer />
    </div>
  );
}

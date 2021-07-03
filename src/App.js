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
    { moduleStatus: "placeholderModule", tempStatus: null },
  ]);

  return (
    <div className="App container">
      <Header date={date} />
      <HeaderSpacing />
      {modules.map((module, index) => {
        return (
          <Module
            key={`${index}-${module.city}`}
            moduleStatus={module.moduleStatus}
            city={module.city}
            tempStatus={module.tempStatus}
            updateDate={(newDate) => {
              setDate(newDate);
            }}
            embedContent={() => {
              module.moduleStatus = "liveModule";
              setModules(modules);
            }}
          />
        );
      })}
      <AddModule
        addModule={() => {
          setModules([
            ...modules,
            { moduleStatus: "placeholderModule", tempStatus: null },
          ]);
        }}
      />
      <Footer />
    </div>
  );
}

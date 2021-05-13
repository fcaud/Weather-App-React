import "./App.css";
import AddModule from "./AddModule";
import Module from "./Module";
import Header from "./Header";
import Footer from "./Footer";
import HeaderSpacing from "./HeaderSpacing";

export default function App() {
  return (
    <div className="App container">
      <Header />
      <HeaderSpacing />
      <Module
        moduleID="liveModule"
        city="London"
        temp={7}
        tempStatus="weather-cold"
      />
      <Module
        moduleID="liveModule"
        city="Madrid"
        temp={20}
        tempStatus="weather-hot"
      />
      <Module moduleID="placeholderModule" />
      <AddModule />
      <Footer />
    </div>
  );
}

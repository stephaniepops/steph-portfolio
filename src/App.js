import React from "react";

import "./App.css";

import Navbar from "./Components/Navbar";
import PhotoName from "./Components/PhotoName";
import Description from "./Components/Description";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <PhotoName />
        <Description />
      </header>
    </div>
  );
}

export default App;

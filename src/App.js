import React from "react";

import "./App.css";

import Navbar from "./Components/Navbar";
import PhotoName from "./Components/PhotoName";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <PhotoName />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

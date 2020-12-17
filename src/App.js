import "./App.css";
import React, { useState } from "react";
import ReactCube from "./components/ReactCube";

function App() {

  return (
    <div className="App">
      Rubik's Cube
      <ReactCube />
      <img src="https://i.imgur.com/fYuQ3JQ.png" alt="reference" />
    </div>
  );
}

export default App;

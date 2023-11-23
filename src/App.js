import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <p>This project was coded by Lisa and is open-sourced on GitHub</p>
        </footer>
      </div>
    </div>
  );
}

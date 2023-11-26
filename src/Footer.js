import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <p className="Footer">
      This project was coded by Lisa and is{" "}
      <a
        href="https://github.com/lisacandemyr/weather-app-react"
        target="_blank"
        rel="noopener noreferrer"
      >
        open-sourced on GitHub
      </a>
    </p>
  );
}

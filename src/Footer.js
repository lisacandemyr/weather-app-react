import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <p className="Footer">
      This project was coded by <strong>Lisa Candemyr</strong>. It is
      open-sourced on{" "}
      <a
        href="https://github.com/lisacandemyr/weather-app-react"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>{" "}
      and hosted on{" "}
      <a
        href="https://www.netlify.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Netlify
      </a>
    </p>
  );
}

import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <input placeholder="Search your destination" type="text"></input>
      <div className="frontline">
        <p className="whitetxt">Where will you go next?</p>
        <p className="whitetxt">
          Welcome to Travel Stories. Travel Stories help you discover new
          destinations and share your travel experiences. Here you can tell
          others your travel story, browse travel guides and more
        </p>
        <p className="whitetxt">Let's Go.....</p>
      </div>
    </div>
  );
}

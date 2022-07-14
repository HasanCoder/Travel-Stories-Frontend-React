import React from "react";
import "./Topbar.css";

function Topbar() {
  return (
    <div className="nav">
      <div className="topLeft">
        <p>Travel</p>
        <p>Stories</p>
      </div>
      <div className="topCenter">
        <ul>
          <li>Home</li>
          <li>Write your Review</li>
          <li>My Reviews</li>
        </ul>
      </div>
      <div className="topRight">
        <p>Muhammad Hasan</p>
      </div>
    </div>
  );
}

export default Topbar;

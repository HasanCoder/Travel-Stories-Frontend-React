import React from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div className="nav">
      <div className="topLeft">
        <p>Travel</p>
        <p>Stories</p>
      </div>
      <div className="topCenter">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/write-review">
            <li>Write your Review</li>
          </Link>
          <Link to="/my-reviews">
            <li>My Reviews</li>
          </Link>
          <Link to="/my-favourite">
            <li>My Favoriste Reviews</li>
          </Link>
        </ul>
      </div>
      <div className="topRight">
        <p>Muhammad Hasan</p>
      </div>
    </div>
  );
}

export default Topbar;

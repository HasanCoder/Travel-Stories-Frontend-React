import React from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";
import { getLoginInfo } from "../../utils/LoginInfo.ts";

function Topbar(props) {
  const role = getLoginInfo().role;
  return (
    <div
      className={`z-10 ${props.className ? "noBackgroundnavigation" : "nav"}`}
    >
      <div className="topLeft">
        <span className="yellotxt">Travel </span>
        <span>Stories</span>
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
            <li>My Favourite Reviews</li>
          </Link>
          <Link to="/users">
            <li style={{ display: role === "ADMIN" ? "" : "none" }}>Users</li>
          </Link>
        </ul>
      </div>
      <div className="topRight">
        {/* <button className="bg-[#FFA902] ml-10 text-black text-lg rounded-md p-3 px-5 drop-shadow-xl font-semibold hover:bg-transparent hover:border-2 hover:border-[#FFA902] hover:text-white">
          Sign In
        </button> */}
        <Link
          to="/login"
          className="bg-[#FFA902] ml-10 text-black text-lg rounded-md p-3 px-5 drop-shadow-xl font-semibold hover:bg-transparent hover:border-2 hover:border-[#FFA902] hover:text-white"
        >
          <button
            onClick={() => {
              localStorage.removeItem("token");
            }}
          >
            Logout
          </button>
        </Link>
        {/* <button className="ml-2 text-white text-lg rounded-md p-3 px-5 drop-shadow-xl font-semibold border-2 border-[#FFA902] hover:bg-[#FFA902]  hover:text-black">
          Sign Up
        </button> */}
      </div>
    </div>
  );
}

export default Topbar;

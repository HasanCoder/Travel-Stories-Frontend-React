import React, { useEffect } from "react";
import Card from "../ui/card";
import "./SinglePost.css";
import { Link } from "react-router-dom";
import SinglePostPage from "../../pages/Blog/Blog";
import { ClockIcon } from "@heroicons/react/solid";
import { Rating } from "@mui/material";

const MAX_LENGTH = 300;
export default function SinglePost(props) {
  useEffect(() => {
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
      sessionStorage.removeItem("scrollPosition");
    }
  }, []);
  return (
    <div className="post">
      <Card>
        <Link
          to={`/blog/${props.id}`}
          onClick={() =>
            sessionStorage.setItem("scrollPosition", window.pageYOffset)
          }
        >
          <img className="postImg" src={props.image} alt={props.title}></img>
          <div className="postInfo">
            <div className="postTitle font-semibold text-2xl px-5 py-2">
              {props.title}
            </div>
            <span className="postPlace bg-slate-200 w-auto px-5 mx-5 rounded-md text-lg">
              {props.place}
            </span>
            <div className="postDesc text-[#868383] px-5 py-5">
              {props.description.length > MAX_LENGTH ? (
                <div>
                  {`${props.description.substring(0, MAX_LENGTH)}...`}
                  <a href="#">Read More</a>
                </div>
              ) : (
                <p>{props.description}</p>
              )}
            </div>
            <div>
              <Rating value={props.rating} readOnly className="px-5 py-3" />
            </div>
            <div className="flex flex-wrap flex-row justify-between">
              <div className="postAuthor text-[#FFA902] px-5 py-3 text-lg justify-start">
                Review by {props.author}
              </div>
              <div className="flex flex-row flex-wrap">
                <ClockIcon className="w-9 h-9 pt-3 pl-3 fill-gray-400" />
                <span className="postTime px-5 py-3 pl-2 text-end ">
                  {props.date}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </Card>
    </div>
  );
}

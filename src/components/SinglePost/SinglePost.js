import React from "react";
import Card from "../ui/card";
import "./SinglePost.css";
import { Link } from "react-router-dom";
import SinglePostPage from "../../pages/Blog/Blog";

const MAX_LENGTH = 300;
export default function SinglePost(props) {
  return (
    <div className="post">
      <Card>
        <Link to={`/blog/${props.id}`}>
          <img className="postImg" src={props.image} alt={props.title}></img>
          <div className="postInfo">
            <div className="postTitle">{props.title}</div>
            <div className="postPlace">{props.place}</div>
            <div className="postDesc">
              {props.description.length > MAX_LENGTH ? (
                <div>
                  {`${props.description.substring(0, MAX_LENGTH)}...`}
                  <a href="#">Read More</a>
                </div>
              ) : (
                <p>{props.description}</p>
              )}
            </div>
            <div className="postAuthor">{props.author}</div>
            <div className="postTime">{props.date}</div>
          </div>
        </Link>
      </Card>
    </div>
  );
}

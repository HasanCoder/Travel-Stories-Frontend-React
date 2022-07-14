import React from "react";
import postImg from "../../images/postimg.png";

export default function SinglePost() {
  return (
    <div className="post">
      <img className="postImg" src={postImg}></img>
      <div className="postInfo">
        <div className="postTitle">Guide to Ratti Gali Lake, Kashmir</div>
        <div className="postDesc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
          cupiditate? Optio a consequatur veniam molestiae. Aliquid sequi
          tenetur amet doloribus?Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Sapiente, rem.
        </div>
        <div className="postAuthor">Review by Muhammad Hasan</div>
        <div className="postTime">1 hour ago</div>
      </div>
    </div>
  );
}

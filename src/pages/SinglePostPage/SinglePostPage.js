import React from "react";
import Footer from "../../components/footer/footer";
import Posts from "../../components/posts/Posts";
import Topbar from "../../components/topbar/Topbar";

export default function SinglePostPage(props) {
  return (
    <>
      <Topbar />
      <div className="post">
        <img className="postImg" src={props.image} alt={props.title}></img>
        <div className="postTitle">{props.title}</div>
        <div className="postPlace">{props.place}</div>
        <div className="dateandauthor">
          <div className="postAuthor">{props.author}</div>
          <div className="postTime">{props.date}</div>
        </div>
        <div className="postInfo">
          <div className="postDesc">{props.description}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

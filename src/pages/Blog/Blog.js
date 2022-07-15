import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/footer";
import Topbar from "../../components/topbar/Topbar";
import { useParams } from "react-router-dom";
import { dummyReviews } from "../../config/data";
import { Link } from "react-router-dom";

export default function Blog(props) {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    let blog = dummyReviews.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);
  return (
    <>
      <Topbar />
      <Link to="/">Go Back</Link>
      {blog ? (
        <div className="post">
          <img className="postImg" src={blog.image} alt={blog.title}></img>
          <div className="postTitle">{blog.title}</div>
          <div className="postPlace">{blog.place}</div>
          <div className="dateandauthor">
            <div className="postAuthor">{blog.author}</div>
            <div className="postTime">{blog.date}</div>
          </div>
          <div className="postInfo">
            <div className="postDesc">{blog.description}</div>
          </div>
        </div>
      ) : null}
    </>
  );
}

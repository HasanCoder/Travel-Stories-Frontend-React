import React, { useEffect, useState } from "react";
import Topbar from "../../components/topbar/Topbar";
import { useParams } from "react-router-dom";
import { dummyReviews } from "../../config/data";
import { Link } from "react-router-dom";

export default function Blog(props) {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [toComment, settoComment] = useState([]);
  const fieldChangeHandler = (e) => {
  setInputValue(e.target.value);
  };
  const addHandler = () =>{
    settoComment(previous => [...previous, inputValue]);
    setInputValue("");
    console.log(toComment);
  };
  const clearHandle = () =>{
    setInputValue("");
  };
  const toCommentHandler = (e) =>{
    
  };

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
        <div>
        <div className="post">
          <img className="postImg  w-[100%] h-[50%]" src={blog.image} alt={blog.title}></img>
          <div className="postTitle">{blog.title}</div>
          <div className="postPlace">{blog.place}</div>
          <div className="dateandauthor">
            <div className="postAuthor">{blog.author}</div>
            <div className="postTime">{blog.date}</div>
          </div>
          <div className="postInfo">
            <div className="postDesc">{blog.description}</div>
          </div>
          <label htmlFor="description" className="block mb-3 text-lg">
              Author - {blog.author}
          </label>
        </div>
        <div className="Wrapper">
         <span><span className="noOfc"></span> Comments </span>
         <div>
           <ul className="list" onClick={toCommentHandler}>
           {React.Children.toArray(
            toComment.map((com, index) => {
              <li className="lis"> {com} My List item
              <span className="icon" id={index}>X</span>
              </li>
              } ) ) }
           </ul>
         </div>
         <div className="m-5 display:inline">
          <input
            type="text"
            placeholder="Add a comment..."
            rows="4"
            value = {inputValue}
            onChange = {fieldChangeHandler}
            className="w-[100%] outline:0 border:none border-bottom: 1px solid black padding: 5px 10px outline: none text-underline-position: under"
            />
            <hr className="color:black solid"></hr>
            <button onClick={clearHandle} className="float-right mr-5 bg-[#fac251] hover:bg-[#FFA902] text-black p-3 rounded-lg text-2xl font-italic">Cancel</button>
            <button onClick={addHandler} className="float-right mr-5 bg-[#FFA902] hover:bg-[#fac251] text-black p-3 rounded-lg text-2xl font-italic" >comment</button>
          </div>
</div>
      </div>
      ) : null}
    </>
  );
}
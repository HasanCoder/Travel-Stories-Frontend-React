import React, { useEffect, useState } from "react";
import Topbar from "../../components/topbar/Topbar";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { dummyReviews } from "../../config/data";
import { Rating } from "@mui/material";

// import { async } from "@firebase/util";

export default function Blog(props) {
  // const [isLoading, setIsLoading] = useState(true);
  // const [loadedReviews, setLoadedReviews] = useState([]);
  const [blog, setBlog] = useState(null);
  const { id } = useParams();

  // async function getReviews() {
  //   const review = await fetch(
  //     "https://travel-stories-74648-default-rtdb.asia-southeast1.firebasedatabase.app/reviews.json",
  //     {
  //       method: "GET",
  //     }
  //   );
  //   const data = await review.json();
  //   setIsLoading(false);
  //   console.log(data);
  // }

  // useEffect(() => {
  //   fetch(
  //     `https://travel-stories-74648-default-rtdb.asia-southeast1.firebasedatabase.app/reviews.json`
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       const reviews = [];
  //       for (const key in data) {
  //         const review = {
  //           id: key,
  //           ...data[key],
  //         };
  //         reviews.push(review);
  //         console.log(review.id);
  //       }
  //       setIsLoading(false);
  //       setLoadedReviews(reviews);
  //       console.log(loadedReviews[0].id);
  //       console.log(id);
  //       let blog = loadedReviews.find((review) => review.id === id);
  //       if (blog) {
  //         setBlog(blog);
  //         console.log(blog);
  //       }
  //     });
  // }, []);

  useEffect(() => {
    let blog = dummyReviews.find((review) => review.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  // if (isLoading) {
  //   return (
  //     <section>
  //       <p>Loading...</p>
  //     </section>
  //   );
  // }
  // if (!isLoading) {
  //   MatchId();
  // }

  // const EmptyList = () => {
  //   return (
  //     <>
  //       <h1>Empty List</h1>
  //     </>
  //   );
  // };

  return (
    <>
      <Topbar />
      <Link to="/" className="m-10 my-10">
        Go Back
      </Link>
      {blog ? (
        <div className="m-20">
          <div>
            <span className="font-poppins font-medium text-black text-3xl">
              {blog.title},{" "}
            </span>
            <span className="font-poppins font-medium text-[#FFA902] text-3xl">
              {blog.place}
            </span>
          </div>
          <div className="my-10 mb-5">
            {/* <div className="text-[#8D8D8D]">{blog.author}</div> */}
            <div className="text-[#8D8D8D]">{blog.date}</div>
            <Rating value={blog.rating} readOnly />
          </div>
          <img
            className=" w-full h-2/3"
            src={blog.image}
            alt={blog.title}
          ></img>
          <div className="postInfo">
            <div className="postDesc my-5 ">{blog.description}</div>
          </div>
          <div className="my-5">
            <h1 className="underline text-2xl mb-2">Staying Hotel</h1>
            <p>Hotel Name: {blog.hotelName}</p>
            <p>Cost per night: {blog.hotelCost}</p>
            <p>Hotel Reference number: {blog.hotelRef}</p>
          </div>
          <div className="my-5">
            <h1 className="underline text-2xl mb-2">
              Transportation Service availed
            </h1>
            <p>Name of Transportation Service: {blog.transportName}</p>
            <p>Cost: {blog.transportCost}</p>
            <p>
              Reference number of Transportation Service: {blog.transportRef}
            </p>
          </div>
          <div className="flex flex-wrap justify-between">
            <img src={require("../../images/image 3.png")} className="m-5" />
            <img src={require("../../images/image 4.png")} className="m-5" />
            <img src={require("../../images/image 5.png")} className="m-5" />
            <img src={require("../../images/image 6.png")} className="m-5" />
          </div>
          <div className="m-5">
            <span className="text-black font-semibold">Author - </span>
            <span className="text-[#FFA902] font-semibold">{blog.author}</span>
          </div>
        </div>
      ) : null}
    </>
  );
}

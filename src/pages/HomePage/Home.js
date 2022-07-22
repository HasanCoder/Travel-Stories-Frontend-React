import React, { useState, useEffect } from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Posts from "../../components/posts/Posts";
import "./Home.css";
import { dummyReviews } from "../../config/data";
import Topbar from "../../components/topbar/Topbar";

export default function Home() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [loadedReviews, setLoadedReviews] = useState([]);
  // useEffect(() => {
  //   fetch(
  //     "https://travel-stories-74648-default-rtdb.asia-southeast1.firebasedatabase.app/reviews.json"
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
  //       }
  //       setIsLoading(false);
  //       setLoadedReviews(reviews);
  //     });
  // }, []);

  // if (isLoading) {
  //   return (
  //     <section>
  //       <p>Loading...</p>
  //     </section>
  //   );
  // }
  return (
    <div className="home">
      <div className="background">
        <Topbar className="noBackground" />
        <Header />
      </div>
      <h1 className="text-center mt-10 font-bold text-4xl mb-10">
        Top Reviews
      </h1>
      <Posts reviews={dummyReviews} />
      <Footer />
    </div>
  );
}

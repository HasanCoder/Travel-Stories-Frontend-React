import React from "react";
import Footer from "../../components/footer/footer";
import NewReview from "../../components/NewReview/NewReview";
import Topbar from "../../components/topbar/Topbar";
import { useNavigate } from "react-router-dom";

export default function WriteReview() {
  const navigate = useNavigate();

  function addReviewHandler(reviewData) {
    fetch(
      "https://travel-stories-74648-default-rtdb.asia-southeast1.firebasedatabase.app/reviews.json",
      {
        method: "POST",
        body: JSON.stringify(reviewData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/");
    });
  }
  return (
    <>
      <Topbar />
      <h1 className="text-4xl font-poppins font-normal m-10">
        Write your Review
      </h1>
      <NewReview onAddReview={addReviewHandler} />
      <Footer />
    </>
  );
}

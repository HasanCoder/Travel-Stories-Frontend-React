import React from "react";
import Footer from "../../components/footer/footer";
import NewReview from "../../components/NewReview/NewReview";
import Topbar from "../../components/topbar/Topbar";

export default function WriteReview() {
  return (
    <>
      <Topbar />
      <h1>Write your Review</h1>
      <NewReview />
      <Footer />
    </>
  );
}

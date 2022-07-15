import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WriteReview from "./pages/WriteReviewPage/WriteReview";
import MyReviews from "./pages/MyReviewsPage/MyReviews";
import MyFavouriteReviews from "./pages/MyFavouriteReviewsPage/MyFavouriteReviews";
import App from "./App";
import SinglePostPage from "./pages/SinglePostPage/SinglePostPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="write-review" element={<WriteReview />} />
      <Route path="my-reviews" element={<MyReviews />} />
      <Route path="my-favourite" element={<MyFavouriteReviews />} />
      <Route path="review-post-1" element={<SinglePostPage />} />
    </Routes>
  </BrowserRouter>
);

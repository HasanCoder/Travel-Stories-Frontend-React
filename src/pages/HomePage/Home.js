import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Posts from "../../components/posts/Posts";
import "./Home.css";
import { dummyReviews } from "../../config/data";
import Topbar from "../../components/topbar/Topbar";

export default function Home() {
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

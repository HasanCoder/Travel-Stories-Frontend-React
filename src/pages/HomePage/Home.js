import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Posts from "../../components/posts/Posts";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <Posts />
      <Footer />
    </div>
  );
}

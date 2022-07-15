import React from "react";
import SinglePost from "../SinglePost/SinglePost";
import Card from "../ui/card";

export default function Posts(props) {
  return (
    <>
      <div className="posts_container">
        {props.reviews.map((review) => (
          <SinglePost
            key={review.id}
            image={review.image}
            title={review.title}
            place={review.place}
            description={review.description}
            rating={review.rating}
            author={review.author}
            date={review.date}
          />
        ))}
      </div>
    </>
  );
}

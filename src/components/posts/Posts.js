import React from "react";
import Blog from "../../pages/Blog/Blog";
import SinglePost from "../SinglePost/SinglePost";

export default function Posts(props) {
  return (
    <>
      <div className="flex flex-wrap flex-row justify-center">
        {props.reviews.map((review) => (
          <>
            <SinglePost
              key={review.id}
              id={review.id}
              image={review.image}
              title={review.title}
              place={review.place}
              description={review.description}
              rating={review.rating}
              author={review.author}
              date={review.date}
            />
          </>
        ))}
      </div>
    </>
  );
}

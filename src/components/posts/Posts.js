import React from "react";
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
              images={review.Images}
              title={review.Title}
              place={review.Place}
              description={review.Experience}
              rating={review.Rating}
              date={review.start_date}
            />
          </>
        ))}
      </div>
    </>
  );
}

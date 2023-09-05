import React from "react";
import "./ReviewsStars.css";
function ReviewsStars({ avgRating }) {
  console.log(avgRating)
  return (
    <div className="review-star-number__container">
      <i className="fa-solid fa-star"></i>
      <div>{avgRating ? avgRating.toFixed(2) : "No Rating"}</div>
    </div>
  );
}

export default ReviewsStars;

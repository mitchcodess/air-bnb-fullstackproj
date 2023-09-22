import React from "react";
import "./ReviewsStars.css";
function ReviewsStars({ avgRating }) {
  return (
    <div className="review-star-number__container">
      <i className="fa-solid fa-star"></i>
      
      <div>{avgRating ? Number(avgRating).toFixed(2) : "New"}</div>
    </div>
  );
}

export default ReviewsStars;

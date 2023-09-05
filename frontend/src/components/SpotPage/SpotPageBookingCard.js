import React from "react";
import "./SpotPageBookingCard.css";

import ReviewsStars from "../UI/ReviewsStars";
function SpotPageBookingCard({ avgRating, reviewCount, price}) {
  return (
    <div className="spot-page-booking-card__container">
      <div className="spot-page-booking-card-price">
        <div className="price">${price}/night</div>
        <div className="review-star-number__container">
          <ReviewsStars avgRating={avgRating} />
          <span>·</span>
          <p>{`${reviewCount} ${reviewCount > 1 ? "reviews" : "review"}`} </p>
        </div>
      </div>
   
      <div>
        <button onClick={() => alert('Feature coming soon')}>Reserve</button>
      </div>
    </div>
  );
}

export default SpotPageBookingCard;

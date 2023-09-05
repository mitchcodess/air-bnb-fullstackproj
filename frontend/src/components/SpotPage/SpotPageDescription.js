import React from "react";
import SpotPageBookingCard from "./SpotPageBookingCard";
import "./SpotPageDescription.css";
function SpotPageDescription({ Owner, description, avgRating, reviewCount, price }) {
  return (
    <div>
      <h2>{`Hosted by ${Owner.firstName} ${Owner.lastName}`}</h2>
      <div className="spot-description__container">
        <div className="spot-description-paragraph">
          <p className="spot-description">{description}</p>
        </div>
        <div>
          <SpotPageBookingCard
            avgRating={avgRating}
            reviewCount={reviewCount}
            price={price}
          />
        </div>
      </div>
    </div>
  );
}

export default SpotPageDescription;

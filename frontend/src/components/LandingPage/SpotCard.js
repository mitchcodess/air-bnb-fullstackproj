import React from "react";
import { NavLink, redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import "./SpotCard.css";

import ReviewsStars from "../UI/ReviewsStars";
const VenueSpotCard = ({ id, name, price, city, state, rating, src }) => {
  if(name.length > 40) {
    name = name.slice(0, 36) + '...'

  }
  return (
    <>
      <div className="spot-card" data-tooltip={name}>
        <NavLink to={`/spots/${id}`} className="spot-card-link">
          <div className="spot-card-img">{<img src={src} alt="spot" />}</div>
          <div className="spot-card-description">
            <div className="spot-card-name-rating">
              <div>
                {city}, {state}
              </div>
              <ReviewsStars avgRating={rating} />
            </div>
            <div className="price-section">
              <strong>${price}</strong>/night
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default VenueSpotCard;

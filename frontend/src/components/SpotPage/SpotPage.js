import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSpotThunk } from "../../store/spot";
import "./SpotPage.css";
import SpotPageImageGrid from "./SpotPageImageGrid";
import SpotPageDescription from "./SpotPageDescription";
import SpotPageReviews from "../SpotPageReviews/SpotPageReviews";
import { clearSpot } from "../../store/spot";
import { clearReviews, getReviewsThunk } from "../../store/reviews";
const Spot = () => {
  const { spotId } = useParams();
  const dispatch = useDispatch();
  const spot = useSelector((state) => state.spot);
  const reviewsObj = useSelector((state) => state.review);
  const reviews = Object.values(reviewsObj).reverse();
  console.log("THIS IS THE REVIEWs", reviewsObj);
  useEffect(() => {
    dispatch(getReviewsThunk(spotId));
    dispatch(getSpotThunk(spotId));
    return () => {
      dispatch(clearSpot());
      dispatch(clearReviews());
    };
  }, [dispatch, spotId]);

  if (!spot.SpotImages) return null;
  return (
    <div className="spot-page__container">
      <h1>{spot.name}</h1>
      <h4>{`${spot.city}, ${spot.state}, ${spot.country}`}</h4>
      <SpotPageImageGrid images={spot.SpotImages} />
      <SpotPageDescription
        Owner={spot.Owner}
        description={spot.description}
        reviewCount={spot.numReviews}
        avgRating={spot.avgStarRating}
        price={spot.price}
      />
      <SpotPageReviews
        reviewCount={spot.numReviews}
        avgRating={spot.avgStarRating}
        reviews={reviews}
        id={spot.id}
        ownerId={spot.Owner.id}
      />
    </div>
  );
};

export default Spot;

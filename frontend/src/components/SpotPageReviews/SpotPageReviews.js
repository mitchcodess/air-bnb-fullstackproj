import React from "react";
import ReviewsStars from "../UI/ReviewsStars";

import SpotPageReviewCard from "../SpotPageReviewCard/SpotPageReviewCard";
function SpotPageReviews({ reviews, reviewCount, avgRating }) {
  console.log(reviews);
  const firstReview = () => {
    if (reviewCount === 0) {
      return (
        <>
          <p></p>
        </>
      );
    }
  };
  return (
    <>
      <div className="spot-page-reviews">
        <div className="review-star-number__container">
          <ReviewsStars avgRating={avgRating} />
          <p>{`${reviewCount} ${reviewCount > 1 ? "reviews" : "review"}`}</p>
        </div>
        {reviews.map((review) => {
          return (
            <SpotPageReviewCard
              id={review.id}
              review={review.review}
              date={review.createdAt}
              stars={review.stars}
              username={review.User.username}
              images={review.ReviewImages}
              reviewUserId={review.userId}
            />
          );
        })}
      </div>
    </>
  );
}

export default SpotPageReviews;

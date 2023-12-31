import React, { useEffect } from "react";
import ReviewsStars from "../UI/ReviewsStars";
import { useSelector } from "react-redux";
import SpotPageReviewCard from "../SpotPageReviewCard/SpotPageReviewCard";
import OpenModalButton from "../OpenModalButton/OpenModalButton";
import CreateReviewModal from "../CreateReviewModal/CreateReviewModal";
import "./SpotPageReviews.css";
function SpotPageReviews({ reviews, reviewCount, avgRating, id, ownerId }) {
  const sessionUser = useSelector((state) => state.session.user);
  const canReview = sessionUser
    ? reviews.find((review) => {
        return review.userId === sessionUser.id;
      })
      ? false
      : true
    : false;

  const isNotOwner = sessionUser
    ? ownerId === sessionUser.id
      ? false
      : true
    : false;

  return (
    <>
      <div className="spot-page-reviews">
        <div className="review-star-number__container">
          <ReviewsStars avgRating={avgRating} />
         {reviewCount ? <p>·{`${reviewCount} ${reviewCount > 1 ? "reviews" : "review"}`}</p> : ''}
        </div>
        <div>
          {!reviewCount ? <p>Be the first to post a review!</p> : ''}
        </div>
        {canReview && isNotOwner && (
          <OpenModalButton
          className='post-review-button'
            modalComponent={<CreateReviewModal />}
            buttonText={"Post your Review"}
          />
        )}
        {reviews.map((review) => {
          
          return (
            <SpotPageReviewCard
             key={review.id}
              id={review.id}
              review={review.review}
              date={review.createdAt}
              stars={review.stars}
              firstName={review.User.firstName}
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

import React, { useEffect } from "react";
import { useState } from "react";
import { useModal } from "../../context/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createReviewThunk } from "../../store/reviews";
import { loadReviews } from "../../store/reviews";
import { getSpotThunk } from "../../store/spot";
import './CreateReviewModal.css'
function CreateReviewModal() {
  const { closeModal } = useModal();
  const dispatch = useDispatch();
  const spotId = useSelector((state) => state.spot.id);
  const [review, setReview] = useState("");
  const [stars, setStars] = useState(0);
  const [errors, setErrors] = useState({})
  const [isDisabled, setIsDisabled] = useState(true);

useEffect(()=> {
  //FIX
  let errors = {}
  if(review.length < 10) errors['review']='Please type more than 10 characters'
  if(stars === 0) errors['stars']='Please enter a star rating'
  setErrors(errors)
  if(review.length > 10) {
    setIsDisabled(false)
  }
  if(stars !== 0 && review.length) {
    setIsDisabled(false)
  }


}, [errors, review, stars])

  const handleSubmit = async (e) => {
    const payload = {
      review,
      stars,
    };
    e.preventDefault();
 
    await dispatch(createReviewThunk(spotId, payload));

    
    closeModal();
  };

  return (
    <>
      <div className="review-modal__container">
        <h1>How was your stay?</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="review-text"> </label>
          <textarea
            id="review-text"
            placeholder="Leave your review here..."
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
          <div className="review-star__container">
            <i
              className={`fa-star ${stars >= 1 ? "fa-solid" : "fa-regular"} `}
              onClick={(e) => setStars(1)}
            ></i>
            <i
              className={`fa-star ${stars >= 2 ? "fa-solid" : "fa-regular"}`}
              onClick={(e) => setStars(2)}
            ></i>
            <i
              className={`fa-star ${stars >= 3 ? "fa-solid" : "fa-regular"}`}
              onClick={(e) => setStars(3)}
            ></i>
            <i
              className={`fa-star ${stars >= 4 ? "fa-solid" : "fa-regular"}`}
              onClick={(e) => setStars(4)}
            ></i>
            <i
              className={`fa-star ${stars === 5 ? "fa-solid" : "fa-regular"}`}
              onClick={(e) => setStars(5)}
            ></i>
          </div>
          <button disabled={isDisabled} type="submit">Submit Review</button>
        </form>
      </div>
    </>
  );
}

export default CreateReviewModal;

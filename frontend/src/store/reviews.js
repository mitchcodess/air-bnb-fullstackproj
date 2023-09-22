import { csrfFetch } from "./csrf";
import { getSpotThunk } from "./spot";
export const LOAD_REVIEWS = "review/LOAD_REVIEWS";
export const DELETE_REVIEW = "review/DELETE_REVIEW";
export const CREATE_REVIEW = "review/CREATE_REVIEW";
export const EDIT_REVIEW = "review/EDIT_REVIEW";

export const CLEAR_REVIEWS = "review/CLEAR_REVIEWS";

export const loadReviews = (reviews) => {
  return {
    type: LOAD_REVIEWS,
    reviews,
  };
};

export const createReview = (review) => {
  return {
    type: CREATE_REVIEW,
    review,
  };
};

export const deleteReview = (id) => {
  return {
    type: DELETE_REVIEW,
    id,
  };
};

export const editReview = (id) => {
  return {
    type: EDIT_REVIEW,
    id,
  };
};

export const clearReviews = (reviews) => {
  return {
    type: CLEAR_REVIEWS,
    reviews,
  };
};

export const getReviewsThunk = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${id}/reviews`);

  if (response.ok) {
    const reviews = await response.json();
    dispatch(loadReviews(reviews));
    return reviews;
  }
};

export const createReviewThunk = (spotId, review) => async (dispatch) => {
  console.log(spotId);
  const response = await csrfFetch(`/api/spots/${spotId}/reviews`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(review),
  
  });
  const response2 = await csrfFetch(`/api/spots/${spotId}/reviews`);

  if (response.ok) {
    dispatch(loadReviews(await response2.json()))
    dispatch(getSpotThunk(spotId));
    return review;
  }
};

export const deleteReviewThunk = (id, spotId) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${id}`, {
    method: "DELETE",
  });
  console.log(spotId);

  if (response.ok) {
    console.log("DELETING REVIEW");
    dispatch(deleteReview(id));
  
    let message = await response.json();
    return message;
  }
};

const initialState = {};
const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_REVIEWS:
      const normalizedReviews = {};
      action.reviews.Reviews.forEach((review) => {
        normalizedReviews[review.id] = review;
      });
      console.log(normalizedReviews);
      return { ...state, ...normalizedReviews };
    case CREATE_REVIEW:
      const newCreateState = { ...state, [action.review.id]: action.review };
      return newCreateState;
    case DELETE_REVIEW:
      const newState = { ...state };
      delete newState[action.id];
      return newState;
    case CLEAR_REVIEWS:
      return initialState;

    default:
      return state;
  }
};

export default reviewReducer;

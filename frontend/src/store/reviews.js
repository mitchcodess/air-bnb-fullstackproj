import { csrfFetch } from "./csrf";

export const LOAD_REVIEWS = "review/LOAD_REVIEWS";
export const DELETE_REVIEW = "review/DELETE_REVIEW";
export const EDIT_REVIEW = "review/EDIT_REVIEW";
export const CLEAR_REVIEWS = "review/CLEAR_REVIEWS";

export const loadReviews = (reviews) => {
  return {
    type: LOAD_REVIEWS,
    reviews,
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
    console.log(reviews);
    dispatch(loadReviews(reviews));
    return reviews;
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

    case CLEAR_REVIEWS:
      return initialState;

    default:
      return state;
  }
};

export default reviewReducer;

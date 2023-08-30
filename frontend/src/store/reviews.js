import { csrfFetch } from "./csrf";

export const LOAD_REVIEWS = 'reviews/LOAD_REVIEWS';


export const loadReviews = (reviews) => {
    return {
        type: LOAD_REVIEWS,
        reviews
    }
}


export const loadReviewsThunk = (id) => async (dispatch) => {

    const response = await csrfFetch(`/api/${id}/reviews`) 

    if(response.ok) {
        const reviews = await response.json();
        dispatch(loadReviews(reviews))
        return reviews
    }
    
}


const initialState = {}
const reviewReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_REVIEWS:
            return {...state, ...action.reviews}

            default: 
            return state;
    }
}


export default reviewReducer;
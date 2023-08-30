import { csrfFetch } from "./csrf";

export const LOAD_USER_SPOTS = "user/LOAD_USER";

export const loadUserSpots = (userSpots) => {
  return {
    type: LOAD_USER_SPOTS,
    userSpots,
  };
};

export const getUserSpotsThunk = () => async (dispatch) => {
  const spotsResponse = await csrfFetch("/api/spots/current");

  if (spotsResponse.ok) {
    const userSpots = await spotsResponse.json();
    console.log(userSpots)
    dispatch(loadUserSpots(userSpots))
    return userSpots;
  }
};

const initialState = {
  userSpots: {

  }
}
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_SPOTS:
      return { ...state, userSpots:{...action.userSpots}};
    default:
      return state;
  }
};

export default userReducer;

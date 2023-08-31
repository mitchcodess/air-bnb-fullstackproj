import { csrfFetch } from "./csrf";

export const LOAD_USER_SPOTS = "user/LOAD_USER";
export const DELETE_USER_SPOT = "user/DELETE_SPOT";
export const loadUserSpots = (userSpots) => {
  return {
    type: LOAD_USER_SPOTS,
    userSpots,
  };
};

export const deleteUserSpot = (id) => {
  return {
    type: DELETE_USER_SPOT,
    id,
  };
};

export const getUserSpotsThunk = () => async (dispatch) => {
  const spotsResponse = await csrfFetch("/api/spots/current");

  if (spotsResponse.ok) {
    const userSpots = await spotsResponse.json();
    dispatch(loadUserSpots(userSpots));
    return userSpots;
  }
};

export const deleteUserSpotThunk = (id) => async (dispatch) => {
  const response = await csrfFetch("/api/spots/" + id, {
    method: "DELETE",
  });

  if (response.ok) {
    console.log("DELETED!");
    dispatch(deleteUserSpot(id));
    const message = await response.json();
    return message;
  }
};

const initialState = {};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_SPOTS:
      const normalizedUserSpots = {};
      action.userSpots.Spots.forEach((spot) => {
        normalizedUserSpots[spot.id] = spot;
      });

      console.log(normalizedUserSpots);
      return { ...state, ...normalizedUserSpots };

    case DELETE_USER_SPOT:
      const newState = { ...state };
      console.log("newState", newState);
      delete newState[action.id];
      return newState;

    default:
      return state;
  }
};

export default userReducer;

export const LOAD_SPOT = "spot/LOAD_SPOT";
export const UPDATE_SPOT = "spot/UPDATE_SPOT";
export const CLEAR_SPOT = "spot/CLEAR_SPOT";

export const loadSpot = (spot) => {
  return {
    type: LOAD_SPOT,
    spot,
  };
};

export const clearSpot = (spot) => {
  return {
    type: CLEAR_SPOT,
    spot,
  };
};

export const getSpotThunk = (id) => async (dispatch) => {
  const response = await fetch("/api/spots/" + id);

  if (response.ok) {
    const spot = await response.json();
    console.log(spot);
    dispatch(loadSpot(spot));
    return spot;
  }
};

const initialState = {};

const spotReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SPOT:
      return { ...state, ...action.spot };
    case CLEAR_SPOT:
      return initialState;

    default:
      return state;
  }
};

export default spotReducer;

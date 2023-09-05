import { csrfFetch } from "./csrf";
import { getSpotThunk } from "./spot";

export const LOAD_SPOTS = "spots/LOAD_SPOTS";
export const ADD_SPOT = "spots/ADD_SPOT";
export const LOAD_SPOT = "spot/LOAD_SPOT";
export const UPDATE_SPOT = "spot/UPDATE_SPOT";
export const CREATE_SPOT_IMAGE = "spot/CREATE_SPOT_IMAGE"

export const loadSpots = (spots) => {
  return {
    type: LOAD_SPOTS,
    spots,
  };
};

export const addSpot = (spot) => {
  return {
    type: ADD_SPOT,
    spot,
  };
};

export const getSpotsThunk = () => async (dispatch) => {
  const response = await fetch("/api/spots");

  if (response.ok) {
    const spots = await response.json();
    console.log("spots", spots);
    dispatch(loadSpots(spots));
    return spots;
  }
};



export const addSpotThunk = (spot) => async (dispatch) => {
  const response = await csrfFetch("/api/spots", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(spot),
  });

  if (response.ok) {
    const spot = await response.json();
    console.log(spot);
    dispatch(addSpot(spot));
    return spot;
  } else {
    const error = await response.json();
    return error
  }
};

export const addSpotImageThunk = (spotId, payload) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}/images`, {
  method: 'POST',
  headers: {'Content-Type':'application/json'},
  body: JSON.stringify(payload)
  })

  if(response.ok) {
    const image = await response.json() 
    console.log('NEW IMAGE ADDED', image)
    dispatch(getSpotThunk(spotId))
    return image;
  }
}

export const updateSpotThunk = (newSpot, id) => async (dispatch) => {
  const response = await csrfFetch("/api/spots/" + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newSpot),
  });

  if (response.ok) {
    const newSpot = await response.json();
    dispatch(addSpot(newSpot));
    return newSpot;
  }
};

const initialState = {
  allSpots: {},
  optionalOrderedList: [],
};

const spotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SPOTS:
      const newSpots = {};
      action.spots.Spots.forEach((spot) => {
        newSpots[spot.id] = spot;
        console.log(newSpots);
      });
      return { ...state, allSpots: { ...newSpots } };
    case ADD_SPOT:
      const newSpot = {};
      newSpot[action.spot.id] = action.spot;
      return { ...state, allSpots: { ...newSpot } };

    default:
      return state;
  }
};

export default spotsReducer;

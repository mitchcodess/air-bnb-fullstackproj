
export const LOAD_SPOT= "spot/LOAD_SPOT";
export const UPDATE_SPOT = "spot/UPDATE_SPOT";
export const DELETE_SPOT =  "spot/DELETE_SPOT"

export const loadSpot = (spot) => {
    return {
        type: LOAD_SPOT,
        spot
    }
}


export const getSpot = (id) => async (dispatch) => {
const response = await fetch ('/api/spots/' + id);

if(response.ok) {
    const spot = await response.json()
    console.log(spot)
    dispatch(loadSpot(spot))
    return spot;
}
}


const initialState = {}


const spotReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_SPOT:
         return {...state,...action.spot}
       

        default:
            return state;

    }
}

export default spotReducer;
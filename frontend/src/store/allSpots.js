
export const LOAD_SPOTS = "spots/LOAD_SPOTS"


export const loadSpots = (spots) => {
    return {
        type: LOAD_SPOTS,
        spots
    }
}


export const getSpots = () => async (dispatch) => {
const response = await fetch ('/api/spots');

if(response.ok) {
    const spots = await response.json()
    dispatch(loadSpots(spots))
    return spots;
}
}


const initialState = {
    allSpots: {},
    optionalOrderedList: []
}

const spotsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_SPOTS:
            const newSpots = {};
            action.spots.Spots.forEach(spot => {
            newSpots[spot.id] = spot;
            console.log(newSpots)
            })
            return {...state, allSpots: {...newSpots}};
       

        default:
            return state;

    }
}

export default spotsReducer;
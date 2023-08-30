
import { useState, useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import VenueSpotCard from './SpotCard';
import {getSpotsThunk} from '../../store/allSpots';
import './LandingPage.css'

//useEffect to get all spots
//useSelector to detect changes in state



export default function LandingPage() {
    const spotsObj = useSelector(state => state.allSpots.allSpots)
    const spots = Object.values(spotsObj)
  
    const dispatch = useDispatch()
    useEffect(() => {
    dispatch(getSpotsThunk())
    },[dispatch])
    
    if(!spots.length) return null;
    

return( 
    <div className="spots-container">
        {spots.map((spot) => {
            return (<VenueSpotCard 
                key={spot.id} 
                id={spot.id}
                name={spot.name} 
                price={spot.price}
                description={spot.description}
                rating={spot.avgRating}
                src={spot.previewImage}
                />)
        })}
    </div>
)
}



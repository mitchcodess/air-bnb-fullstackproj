import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getUserSpotsThunk } from '../../store/user';
import VenueSpotCard from '../LandingPage/SpotCard';
import LandingPage from '../LandingPage/LandingPage';
import './ManagePage.css'
import DeleteButton from '../UI/DeleteButton';
import UpdateButton from '../UI/UpdateButton';
import OpenModalButton from '../OpenModalButton/OpenModalButton';
import DeleteSpotModal from '../DeleteSpotModal/DeleteSpotModal';
function ManagePage() {
    const spots = useSelector(state => state.user)

    const userSpots = Object.values(spots);

    const dispatch = useDispatch();
    const manage = true;
    useEffect(() => {
        dispatch(getUserSpotsThunk())
    },[dispatch])

 if(!userSpots) return null;
  return (
    <>
    <div>
            <div className="manage-container">
            <h1>Need to Update or Delete your Haven?</h1>
        {userSpots.map((spot) => {
            return (<>
                <VenueSpotCard 
                key={spot.id} 
                id={spot.id}
                name={spot.name} 
                price={spot.price}
                description={spot.description}
                rating={spot.avgRating}
                src={spot.previewImage}
                manage = {manage}
                />
                <UpdateButton id={spot.id}/>
                <OpenModalButton modalComponent={<DeleteSpotModal id={spot.id}/>} buttonText={'Delete'}/>
                 </>)
        })}
        </div>
        </div>
    </>
  )
}

export default ManagePage
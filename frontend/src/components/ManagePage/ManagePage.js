import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getUserSpotsThunk } from '../../store/user';
import VenueSpotCard from '../LandingPage/SpotCard';
import LandingPage from '../LandingPage/LandingPage';
import './ManagePage.css'
import DeleteButton from '../UI/DeleteButton';
import UpdateButton from '../UI/UpdateButton';
function ManagePage() {
    const userSpots= useSelector(state => state.user.userSpots.Spots)
    console.log(userSpots)
    const dispatch = useDispatch();
    const manage = true;
    useEffect(() => {
        dispatch(getUserSpotsThunk())
    },[dispatch])

 if(!userSpots) return null;
  return (
    <>
    <div>
    <h1>Need to Update or Delete your venue?</h1>
            <div className="manage-container">
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
                <DeleteButton id ={spot.id}/>
                 </>)
        })}
        </div>
        </div>
    </>
  )
}

export default ManagePage
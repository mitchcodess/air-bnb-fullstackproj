import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import { getSpot } from '../../store/spot';
import './SpotPage.css'
import SpotPageImageGrid from './SpotPageImageGrid';
const Spot = () =>  {
    const {spotId} = useParams();
    const dispatch = useDispatch();
    const spot = useSelector(state => state.spot)

    useEffect(() => {
      dispatch(getSpot(spotId))
    },[dispatch, spotId])

    console.log(spot)
    if(!spot.SpotImages) return null;
  return (

    <div className='spot-page__container'>
      <h1>{spot.name}</h1>
      <h4>{`${spot.city}, ${spot.state}, ${spot.country}`}</h4>
      {<SpotPageImageGrid images={spot.SpotImages} />}
      <div>Description</div>
      {/* SpotPageBookingButton */}
      {/* SpotPageReviews */}
    </div>
  )
}

export default Spot;

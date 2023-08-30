import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import { getSpotThunk } from '../../store/spot';
import './SpotPage.css'
import SpotPageImageGrid from './SpotPageImageGrid';
import SpotPageDescription from './SpotPageDescription';
import { clearSpot } from '../../store/spot';
const Spot = () =>  {
    const {spotId} = useParams();
    const dispatch = useDispatch();
    const spot = useSelector(state => state.spot)

    useEffect(() => {

      dispatch(getSpotThunk(spotId))
      return () => {
        dispatch(clearSpot())
      }
    },[dispatch, spotId])

    console.log(spot)
    if(!spot.SpotImages) return null;
  return (

    <div className='spot-page__container'>
      <h1>{spot.name}</h1>
      <h4>{`${spot.city}, ${spot.state}, ${spot.country}`}</h4>
      <SpotPageImageGrid images={spot.SpotImages}  />
      <SpotPageDescription Owner={spot.Owner} description={spot.description}/>
      {/* SpotPageReviews */}
    </div>
  )
}

export default Spot;

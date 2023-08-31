import React from 'react'
import {NavLink, redirect} from 'react-router-dom'
import { useSelector } from 'react-redux'
import './SpotCard.css'

import ReviewsStars from '../UI/ReviewsStars'
const VenueSpotCard= ({id, name, price, rating, src}) => {

  return (
    <div className='spot-card'>
      <NavLink to={`/spots/${id}`} className='spot-card-link'>
        <div className='spot-card-img'>
            {<img src={src} alt='spot'/> }
        </div>
        <div className='spot-card-description'>
          <div className='spot-card-name-rating'>
            <div>{name}</div>
            <ReviewsStars avgRating={rating}/>
          </div>
            <div>${price} </div>
         
        </div>
        </NavLink> 
    </div>
  )
}

export default VenueSpotCard
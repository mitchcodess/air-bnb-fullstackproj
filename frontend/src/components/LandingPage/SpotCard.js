import React from 'react'
import {NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'
import './SpotCard.css'
import defaultimg from '../../assets/default.webp'
const VenueSpotCard = ({id, name, price, rating, src}) => {

  return (
    <div className='spot-card'>
      <NavLink to={`/spots/${id}`} className='spot-card-link'>
        <div className='spot-card-img'>
            {<img src={defaultimg} /> }
        </div>
        <div className='spot-card-description'>
          <ul>
            <li>{name}</li>
            <li>{rating ? rating : 'No Rating'}</li>
            <li>{price}</li>
          </ul>
        </div>
        </NavLink> 
    </div>
  )
}

export default VenueSpotCard
import React from 'react'
import SpotPageBookingCard from './SpotPageBookingCard'
import './SpotPageDescription.css'
function SpotPageDescription({Owner, description}) {
  return (
    <div> 
    <h3>{`Hosted by ${Owner.firstName} ${Owner.lastName}`}</h3>
    <div className='spot-description__container'>
        <div className='spot-description-paragraph'>
            <p className='spot-description'>{description}</p>
        </div>
        <div>
            <SpotPageBookingCard/>
        </div>
    </div>
    </div>
  )
}

export default SpotPageDescription
import React from 'react'
import './SpotPageBookingCard.css'
import NumberOfReviews from '../UI/NumberOfReviews'
import ReviewsStars from '../UI/ReviewsStars'
function SpotPageBookingCard() {
  return (

    <div className='spot-page-booking-card__container'>
        <div className='spot-page-booking-card-price'>
            <div>
              Rate per evening
            </div>
            <div>
            <ReviewsStars/>
            <NumberOfReviews/>
            </div>
        </div>
        <div>
            Booking Dates Selection
        </div>
        <div>
          <button>Reserve</button>
        </div>
        <div>
          You won't be charged yet.
        </div>

        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <div>
          Final Price
        </div>
    </div>
 
  )
}

export default SpotPageBookingCard
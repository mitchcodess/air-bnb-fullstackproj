import React from 'react'
import ReviewsStars from '../UI/ReviewsStars'
import NumberOfReviews from '../UI/NumberOfReviews'

function Reviews() {
  return (
    <>
    <div className='spot-page-reviews'>
        <ReviewsStars/>
        <NumberOfReviews/>
    </div>
    </>
  )
}

export default Reviews
import React from 'react'
function ReviewsStars({avgRating}) {
  return (
    <>
    <i class="fa-solid fa-star"></i>
    <div>{avgRating ? avgRating : 'No Rating'}</div>
    </>
  )
}

export default ReviewsStars
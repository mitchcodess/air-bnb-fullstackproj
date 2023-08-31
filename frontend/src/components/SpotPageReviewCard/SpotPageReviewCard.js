import React from 'react'
import './SpotPageReviewCard.css'
function SpotPageReviewCard({review, date, username, stars, images}) {

const dateString1 =  new Date(date);
const dateString2 = dateString1.toLocaleString('en-US',{ month: "long", year: "numeric"});
  return (
    <>
    <div className='review-card__container'>
    <ul className='review-card-list'>
        <li>{username}</li>
        <li>{dateString2}</li>
        <li>{review}</li>
        <button> </button>
    </ul>
    </div>
    </>
  )
}

export default SpotPageReviewCard
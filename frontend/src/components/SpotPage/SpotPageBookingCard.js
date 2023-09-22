import React, { useState } from "react";
import "./SpotPageBookingCard.css";

import ReviewsStars from "../UI/ReviewsStars";
import BookingCalendar from "./BookingCalendar";
import { csrfFetch } from "../../store/csrf";
import { json } from "react-router-dom";






function SpotPageBookingCard({ avgRating, reviewCount, price, spotId}) {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [errors, setErrors] = useState()
  const [success, setSuccess] = useState()
   const handleStartDate = (date) => {
    setStartDate(date)
   }

   const handleEndDate = (date) => {
    setEndDate(date)
   }

   const convertDate = (dateString) => {
    const date = new Date(dateString);
    const formatDate= date.toLocaleDateString('EN-us')
    return formatDate.replaceAll('/','-')
   }

   const handleSubmit = async (e) => {
    const start = convertDate(startDate)
    const end = convertDate(endDate)
    
  
    const payload = {
      startDate: start,
      endDate: end
    }

    const response = await csrfFetch(`/api/spots/${spotId}/bookings`,{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    })

    if(response.ok) {
      setErrors({})
      setSuccess('Success!')
    }
    else {
      setSuccess('')
      const error = await response.json()
      setErrors(error)
      
    }
   }


  return (
    <div className="spot-page-booking-card__container">
      <div className="spot-page-booking-card-price">
        <div className="price">${price}/night</div>
        <div className="review-star-number__container">
          <ReviewsStars avgRating={avgRating} />
          {reviewCount ? <p>·{`${reviewCount} ${reviewCount > 1 ? "reviews" : "review"}`}</p> : ''}
        </div>
      </div>
      {errors && <p className="error-text">{errors.message}</p>}
      {success && <p>{success}</p>}
      <div className="spot-page-reserve-container">
        <BookingCalendar 
        handleStartDate={handleStartDate}
         startDate={startDate} 
         endDate={endDate} 
         handleEndDate={handleEndDate}/>
      </div>
      <button className="spot-page-reserve-button" onClick={() => {handleSubmit()}}>Reserve</button>
    </div>
  );
}

export default SpotPageBookingCard;

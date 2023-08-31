import React from 'react'

function CreateReviewModal() {


    const handleSubmit = async(e) => {
            

    }


  return (
    <>
    <div className='review-modal__container'>
    <h1>How was your stay?</h1>
    <form onSubmit={handleSubmit}>
        <label for='review-text'></label>
        <textarea id='review-text'></textarea>
    </form>
    <button type='submit'>Submit Review</button>
    </div>
    |</>
  )
}

export default CreateReviewModal
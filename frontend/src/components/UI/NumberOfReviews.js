import React from 'react'

function NumberOfReviews({numReviews}) {
  return (
    <>
    {numReviews ? numReviews : 'No Reviews'}
    </>
  )
}

export default NumberOfReviews
import React from 'react'
import { Link } from 'react-router-dom'
function UpdateButton({id}) {
  return (
    <Link to={`/spots/${id}/edit`}>Update</Link>
  )
}

export default UpdateButton
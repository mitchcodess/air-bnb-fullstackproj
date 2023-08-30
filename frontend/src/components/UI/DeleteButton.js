import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteSpotThunk } from '../../store/allSpots';

function DeleteButton({id}) {
const dispatch = useDispatch();
const handleClick = async (e) => {
    e.preventDefault();
   let message = await dispatch(deleteSpotThunk(id))
   console.log(message)
}

  return (
    <button onClick={handleClick}>
        Delete
    </button>
  )
}

export default DeleteButton;
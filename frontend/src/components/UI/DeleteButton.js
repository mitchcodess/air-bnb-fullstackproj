import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteUserSpotThunk } from '../../store/user';
import { useModal } from '../../context/Modal';
function DeleteButton({id}) {
  const {closeModal} = useModal()
const dispatch = useDispatch();
const handleClick = async (e) => {
    e.preventDefault();
   let message = await dispatch(deleteUserSpotThunk(id))
   closeModal()
}

  return (
    <button onClick={handleClick}>
        Yes (Delete Venue)
    </button>
  )
}

export default DeleteButton;
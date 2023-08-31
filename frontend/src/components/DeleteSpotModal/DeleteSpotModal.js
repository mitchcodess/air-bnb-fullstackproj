import React from 'react'
import { useDispatch } from 'react-redux';
import DeleteButton from '../UI/DeleteButton';
import { useModal } from "../../context/Modal";
function DeleteSpotModal({id}) {
    const { closeModal } = useModal();



    return (
        <>
          <div className="login-modal__container">
            <h1>Confirm Deletion</h1>
            <p>Are you sure you want to delete this Haven?</p>
            <div>
                <DeleteButton id={id}/>
            </div>
            <div>
                <button>Cancel (Keep Venue)</button>
            </div>
          </div>
        </>
      );
    }


export default DeleteSpotModal
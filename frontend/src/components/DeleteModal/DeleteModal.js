import React from 'react'
import { useDispatch } from 'react-redux';
import DeleteButton from '../UI/DeleteButton';
import { useModal } from "../../context/Modal";
import './DeleteModal.css'
function DeleteModal({id, title, message, confirmMessage, cancelMessage, onConfirm, callBack}) {

    console.log(onConfirm)
    console.log(callBack)



function handleConfirm () {
  onConfirm()
  callBack()
}

function handleCancel() {
  callBack()
}


    return (
        <>
          <div className="login-modal__container">
            <h1>{title}</h1>
            <p>{message}</p>
            <div>
                <button onClick={handleConfirm}>{confirmMessage}</button>
            </div>
            <div>
                <button onClick={handleCancel}>{cancelMessage}</button>
            </div>
          </div>
        </>
      );
    }


export default DeleteModal
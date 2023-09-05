import React from "react";
import { useDispatch } from "react-redux";
import DeleteButton from "../UI/DeleteButton";
import { useModal } from "../../context/Modal";
import "./DeleteModal.css";
function DeleteModal({
  id,
  title,
  message,
  confirmMessage,
  cancelMessage,
  onConfirm,
  callBack,
}) {
  function handleConfirm() {
    onConfirm(id);
    callBack();
  }

  function handleCancel() {
    callBack();
  }

  return (
    <>
      <div className="delete-modal__container">
        <h1>{title}</h1>
        <p>{message}</p>
        <div>
          <button className='confirm-button'onClick={handleConfirm}>{confirmMessage}</button>
        </div>
        <div>
          <button className='delete-button'onClick={handleCancel}>{cancelMessage}</button>
        </div>
      </div>
    </>
  );
}

export default DeleteModal;

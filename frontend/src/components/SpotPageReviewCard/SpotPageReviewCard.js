import React from "react";
import "./SpotPageReviewCard.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import OpenModalButton from "../OpenModalButton/OpenModalButton";
import DeleteModal from "../DeleteModal/DeleteModal";
import { useModal } from "../../context/Modal";
import { useDispatch } from "react-redux";
import { deleteReviewThunk } from "../../store/reviews";
import { clearSpot, loadSpot } from "../../store/spot";
import { getSpotThunk } from "../../store/spot";
function SpotPageReviewCard({
  id,
  review,
  date,
  stars,
  images,
  reviewUserId,
  username,
}) {
  const { spotId } = useParams();
  const { closeModal } = useModal();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);


  const dateString1 = new Date(date);
  const dateString2 = dateString1.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  const onConfirm = async (id) => {
    await dispatch(deleteReviewThunk(id, spotId));
    await dispatch(getSpotThunk(spotId));
  };
  return (
    <>
      <div className="review-card__container">
        <ul className="review-card-list">
          <li>{username}</li>
          <li>{dateString2}</li>
          <li>{review}</li>
          {sessionUser
            ? sessionUser.id === reviewUserId && (
                <OpenModalButton
                  modalComponent={
                    <DeleteModal
                      id={id}
                      title={"Confirm Review Deletion"}
                      message={"Are you sure you want to delete this review?"}
                      confirmMessage={"Yes (Delete review)"}
                      cancelMessage={"No (Keep review)"}
                      onConfirm={onConfirm}
                      callBack={closeModal}
                    />
                  }
                  buttonText={"Delete"}
                />
              )
            : ""}
        </ul>
      </div>
    </>
  );
}

export default SpotPageReviewCard;

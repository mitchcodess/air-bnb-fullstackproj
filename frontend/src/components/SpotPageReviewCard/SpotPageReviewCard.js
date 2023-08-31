import React from "react";
import "./SpotPageReviewCard.css";
import { useSelector } from "react-redux";
import OpenModalButton from "../OpenModalButton/OpenModalButton";
import DeleteModal from "../DeleteModal/DeleteModal";
function SpotPageReviewCard({
  id,
  review,
  date,
  username,
  stars,
  images,
  reviewUserId,
}) {
  const userId = useSelector((state) => state.session.user.id);
  const dateString1 = new Date(date);
  const dateString2 = dateString1.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <div className="review-card__container">
        <ul className="review-card-list">
          <li>{username}</li>
          <li>{dateString2}</li>
          <li>{review}</li>
          {userId === reviewUserId && (
            <OpenModalButton
              modalComponent={
                <DeleteModal
                  title={"Confirm Review Deletion"}
                  message={"Are you sure you want to delete this review?"}
                  confirmMessage={"Yes (Delete review)"}
                  cancelMessage={"No (Keep review)"}
                />
              }
              buttonText={"Delete"}
            />
          )}
        </ul>
      </div>
    </>
  );
}

export default SpotPageReviewCard;

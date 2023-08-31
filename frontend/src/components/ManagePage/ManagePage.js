import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserSpotsThunk } from "../../store/user";
import VenueSpotCard from "../LandingPage/SpotCard";
import LandingPage from "../LandingPage/LandingPage";
import "./ManagePage.css";
import DeleteButton from "../UI/DeleteButton";
import UpdateButton from "../UI/UpdateButton";
import OpenModalButton from "../OpenModalButton/OpenModalButton";
import DeleteModal from "../DeleteModal/DeleteModal";
import { useModal } from "../../context/Modal";

function ManagePage() {
  const spots = useSelector((state) => state.user);
  const userSpots = Object.values(spots);
  const { closeModal } = useModal();
  const dispatch = useDispatch();
  const manage = true;
  useEffect(() => {
    dispatch(getUserSpotsThunk());
  }, [dispatch]);

  if (!userSpots) return null;

  const onConfirm = () => {};

  return (
    <>
      <div>
        <h1>Need to Update or Delete your Haven?</h1>
        <div className="manage-container">
          {userSpots.map((spot) => {
            return (
              <>
                <div className="manage-item">
                  <VenueSpotCard
                    key={spot.id}
                    id={spot.id}
                    name={spot.name}
                    price={spot.price}
                    description={spot.description}
                    rating={spot.avgRating}
                    src={spot.previewImage}
                    manage={manage}
                  />
                  <UpdateButton id={spot.id} />
                  <OpenModalButton
                    modalComponent={
                      <DeleteModal
                        id={spot.id}
                        title={"Confirm Haven Deletion"}
                        message={"Are you sure you want to delete this Haven?"}
                        confirmMessage={"Yes (Delete Haven)"}
                        cancelMessage={"No (Keep Haven)"}
                        onConfirm={onConfirm}
                        callBack={closeModal}
                      />
                    }
                    buttonText={"Delete"}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ManagePage;

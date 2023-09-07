import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserSpotsThunk } from "../../store/user";
import VenueSpotCard from "../LandingPage/SpotCard";
import "./ManagePage.css";
import UpdateButton from "../UI/UpdateButton";
import OpenModalButton from "../OpenModalButton/OpenModalButton";
import DeleteModal from "../DeleteModal/DeleteModal";
import { useModal } from "../../context/Modal";
import { deleteUserSpotThunk } from "../../store/user";
import { NavLink } from "react-router-dom";
import { clearSpots } from "../../store/user";

function ManagePage() {
  const { closeModal } = useModal();
  const dispatch = useDispatch();
  const spots = useSelector((state) => state.user);
  const userSpots = Object.values(spots);
  const manage = true;
  useEffect(() => {
    dispatch(getUserSpotsThunk());
    return () => dispatch(clearSpots())
  }, [dispatch, ]);

  if (!userSpots) return null;

  const onConfirm = async (id) => {
    await dispatch(deleteUserSpotThunk(id));
  };

  return (
    <>
      <div>
        <div className="manage-title">
        <h1 >Manage your Havens</h1>
        <NavLink to='/spots/new'>
          <button>Create a Haven</button>
        </NavLink>
        </div>
        <div className="manage-container">
          {userSpots.map((spot) => {
            return (
              <>
                <div className="manage-item">
                  <VenueSpotCard
                    key={spot.id}
                    id={spot.id}
                    name={spot.name}
                    state={spot.state}
                    price={spot.price}
                    city={spot.city}
                    description={spot.description}
                    rating={spot.avgRating}
                    src={spot.previewImage}
                    manage={manage}
                  />
                  <div className="manage-item-button__container">
                  <UpdateButton id={spot.id} />
                  <OpenModalButton 
                    modalComponent={
                      <DeleteModal
                        id={spot.id}
                        title={"Confirm Haven Deletion"}
                        message={"Are you sure you want to remove this Haven from the listings?"}
                        confirmMessage={"Yes (Delete Haven)"}
                        cancelMessage={"No (Keep Haven)"}
                        onConfirm={onConfirm}
                        callBack={closeModal}
                      />
                    }
                    buttonText={"Delete"}
                  />
                </div>
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

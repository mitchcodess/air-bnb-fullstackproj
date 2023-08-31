import React from "react";
import SpotForm from "./SpotForm";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getSpotThunk } from "../../store/spot";

function UpdateSpotForm() {
  const dispatch = useDispatch();
  const { spotId } = useParams();
  const spot = useSelector((state) => state.spot);

  useEffect(() => {
    dispatch(getSpotThunk(spotId));
  }, [dispatch, spotId]);

  return (
    <SpotForm
      id={spot.id}
      currentCountry={spot.country}
      currentCity={spot.city}
      currentAddress={spot.address}
      currentState={spot.state}
      currentDescription={spot.description}
      currentName={spot.name}
      currentPrice={spot.price}
      formType="update"
    />
  );
}

export default UpdateSpotForm;

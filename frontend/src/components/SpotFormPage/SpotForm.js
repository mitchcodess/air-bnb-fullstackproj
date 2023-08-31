import React from "react";
import "./SpotForm.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSpot, addSpotThunk, updateSpotThunk } from "../../store/allSpots";
function SpotForm({id, currentCountry,  currentCity, currentAddress, currentState, currentDescription, currentName,  currentPrice, formType }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const [validationErrors, setValidationErrors] = useState({});
  

useEffect(() => {
  if(formType === 'update') {
   setCountry(currentCountry)
   setAddress(currentAddress)
   setCity(currentCity)
   setState(currentState)
   setDescription(currentDescription)
   setName(currentName)
   setPrice(currentPrice)
  }
}, [formType ,currentCountry, currentAddress, currentCity, currentState, currentDescription, currentName, currentPrice])


  const handleSubmit = async (e) => {
    e.preventDefault();


    const payload = {
      country,
      address,
      lat: 1,
      lng: 1,
      city,
      state,
      description,
      name,
      price,
    };

    if(formType === 'update') {
      console.log('UPDATING SPOT')
      let updatedSpot = await dispatch(updateSpotThunk(payload, id))

      navigate(`/spots/${updatedSpot.id}`);
   
    }
    else {
    let newSpot = await dispatch(addSpotThunk(payload));

    if (newSpot) {
      console.log("NAVIGATING TO NEW SPOT");
      navigate(`/spots/${newSpot.id}`);
    }
  }
    setCountry("");
    setAddress("");
    setCity("");
    setState("");
    setState("");
    setDescription("");
    setName("");
    setPrice("");
    setImages([]);
  };

  return (
    <>
      <div className="create-form__container">
        <h2>Submit your property as a Haven!</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="country">Country</label>
            <input
              id="country"
              type="text"
              onChange={(e) => setCountry(e.target.value)}
              value={country}
            />
          </div>
          <div>
            <label htmlFor="street-address">Street Address</label>
            <input
              id="street-address"
              type="text"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
          </div>
          <div>
            <label htmlFor="state">State</label>
            <input
              id="state"
              type="text"
              onChange={(e) => setState(e.target.value)}
              value={state}
            />
          </div>
          <div>
            <label htmlFor="description">Describe your Venue</label>
            <textarea
              id="description"
              type="text-area"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></textarea>
          </div>
          <div>
            <label htmlFor="title">Name</label>
            <input
              id="title"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input
              id="price"
              type="number"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </div>
          {/* <div>
          <label htmlFor='image-link'></label>
          <input
            id='image-link'
            type='url'
            onChange={e => setRate(e.target.value)}
            value={rate}
          />
        </div>
        <div>
          <label htmlFor='image-link'></label>
          <input
            id='image-link'
            type='url'
            onChange={e => setRate(e.target.value)}
            value={rate}
          />
        </div>
        <div>
          <label htmlFor='image-link'></label>
          <input
            id='image-link'
            type='url'
            onChange={e => setRate(e.target.value)}
            value={rate}
          />
        </div>
        <div>
          <label htmlFor='image-link'></label>
          <input
            id='image-link'
            type='url'
            onChange={e => setRate(e.target.value)}
            value={rate}
          />
        </div>
        <div>
          <label htmlFor='image-link'></label>
          <input
            id='image-link'
            type='url'
            onChange={e => setRate(e.target.value)}
            value={rate}
          />
        </div> */}
          <div className="create-venue-submit__container"></div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default SpotForm;

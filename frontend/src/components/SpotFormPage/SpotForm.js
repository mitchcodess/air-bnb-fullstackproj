import React from "react";
import "./SpotForm.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSpot, addSpotThunk, updateSpotThunk } from "../../store/allSpots";
import { addSpotImageThunk } from "../../store/allSpots";
function SpotForm({
  id,
  currentCountry,
  currentCity,
  currentAddress,
  currentState,
  currentDescription,
  currentName,
  currentPrice,
  formType,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [previewImage, setPreviewImage] = useState("")
  const [image2, setImage2] = useState('')
  const [image3, setImage3] = useState('')
  const [image4, setImage4] = useState('')
  const [image5, setImage5] = useState('')
  const [error, setErrors] = useState({})


  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    if (formType === "update") {
      setCountry(currentCountry);
      setAddress(currentAddress);
      setCity(currentCity);
      setState(currentState);
      setDescription(currentDescription);
      setName(currentName);
      setPrice(currentPrice);
    }
  }, [
    formType,
    currentCountry,
    currentAddress,
    currentCity,
    currentState,
    currentDescription,
    currentName,
    currentPrice,
  ]);

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

    if (formType === "update") {
      console.log("UPDATING SPOT");
      let updatedSpot = await dispatch(updateSpotThunk(payload, id));

      navigate(`/spots/${updatedSpot.id}`);

    } else {
      let newSpot = await dispatch(addSpotThunk(payload));
      if (newSpot) {
      
          const previewPayload = {
            url: previewImage,
            preview: true
          }
         await dispatch(addSpotImageThunk(newSpot.id, previewPayload));
         if(image2) {
          const image2Payload = {
            url:image2,
            preview: false
          }
          await dispatch(addSpotImageThunk(newSpot.id, image2Payload));
         }

         if(image3) {
          const image3Payload = {
            url:image3,
            preview: false
          }
          await dispatch(addSpotImageThunk(newSpot.id, image3Payload));
         }
         if(image4) {
          const image4Payload = {
            url:image4,
            preview: false
          }
          await dispatch(addSpotImageThunk(newSpot.id, image4Payload));
         }

         if(image5) {
          const image5Payload = {
            url:image5,
            preview: false
          }
          await dispatch(addSpotImageThunk(newSpot.id, image5Payload));
         }

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
    setPreviewImage('')
    setImage2('')
    setImage3('')
    setImage4('')
    setImage5('')
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
              placeholder="Country"
            />
          </div>
          <div>
            <label htmlFor="street-address">Street Address</label>
            <input
              id="street-address"
              type="text"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              placeholder="Address"
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              placeholder="City"
            />
          </div>
          <div>
            <label htmlFor="state">State</label>
            <input
              id="state"
              type="text"
              onChange={(e) => setState(e.target.value)}
              value={state}
              placeholder="State"
            />
          </div>
          <div>
            <label htmlFor="description">Describe your Venue</label>
            <textarea
              id="description"
              type="text-area"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              placeholder="Please write atleast 30 characters"
            ></textarea>
          </div>
          <div>
            <label htmlFor="title">Name</label>
            <input
              id="title"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Title"
            />
          </div>
          <div>
            <label htmlFor="price">Rate per Night</label>
            <input
              id="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Rate"
            />
          </div>
          <div>
          <label htmlFor='image-link'>Preview Image Url</label>
          <input
            id='image-link'
            type='text'
            placeholder="Preview Image"
            onChange={e => setPreviewImage(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='image-link'></label>
          <input
            id='image-link'
            type='text'
            placeholder="Image 2"
            onChange={e => setImage2(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='image-link'></label>
          <input
            id='image-link'
            type='text'
            placeholder="Image 3"
            onChange={e => setImage3(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='image-link'></label>
          <input
            id='image-link'
            type='text'
            placeholder="Image 4"
            onChange={e => setImage4(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='image-link'></label>
          <input
            id='image-link'
            type='text'
            placeholder="Image 5"
            onChange={e => setImage5(e.target.value)}
          />
        </div>
          <div className="create-venue-submit__container"></div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default SpotForm;

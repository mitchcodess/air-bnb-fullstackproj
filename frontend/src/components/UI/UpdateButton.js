import React from "react";
import { Link } from "react-router-dom";
import './UpdateButton.css'
function UpdateButton({ id }) {
  return <Link to={`/spots/${id}/edit`} ><button className="update-button">Update</button></Link>;
}

export default UpdateButton;

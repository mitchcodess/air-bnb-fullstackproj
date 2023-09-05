// frontend/src/components/Navigation/index.js
import logo from "../../assets/HavenLandingLogo.svg";
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <div>
      <div className="nav-bar__container">
        <li>
          <NavLink exact to="/" className="nav-text">
            <img src={logo} className="landing-logo" />
          </NavLink>
        </li>
        {isLoaded && (
          <>
          <div className="profile-submit-buttons__container">
            {sessionUser && (
              <li>
              <NavLink exact to="/spots/new">
                <button className="submit-haven-button">
                  Haven your home
                </button>
              </NavLink>
              </li>
            )}
            <li>
              <ProfileButton user={sessionUser} />
            </li>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Navigation;

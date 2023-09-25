import React from "react";
import video from "../../assets/video/main.mp4";
import "./VideoBackground.css";
import OpenModalButton from "../OpenModalButton/OpenModalButton";
import Button from "../UI/Button";
export default function VideoBackground() {
  return (
    <div className="video-background-container">
      <video className="main-video" src={video} autoPlay loop muted></video>
      <div className="hero-container">
        <p>Find your Haven.</p>
        <div className="hero-button-container">
          <Button text={"View Havens"} />
          <Button text={"Log In"} />
        </div>
      </div>
    </div>
  );
}

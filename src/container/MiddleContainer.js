import React from "react";
import Profile from "./MiddleContainerPages/Profile";
import SocialMiddle from "./MiddleContainerPages/SocialMiddle";
import Tweet from "./MiddleContainerPages/Tweet";
import Weather from "./MiddleContainerPages/Weather";
import '../styles/MiddleContainer.css'

export default function MiddleContainer() {
  return <div className="middle-container container">
      <Profile />
      <Weather/>
      <Tweet />
      <SocialMiddle />
  </div>;
}

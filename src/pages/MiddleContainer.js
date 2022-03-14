import React from "react";
import Profile from "./Profile";
import SocialMiddle from "./SocialMiddle";
import Tweet from "./Tweet";
import Weather from "./Weather";

export default function MiddleContainer() {
  return <div className="middle-container container">
      <Profile />
      <Weather/>
      <Tweet />
      <SocialMiddle />
  </div>;
}

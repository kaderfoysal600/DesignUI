import React from "react";
import ProfileOption from "../components/ProfileOption";

export default function Profile() {
  return (
    <div className="profile block">
      {/* PROFILE (MIDDLE-CONTAINER)  */}
      <a className="add-button" href="#28">
        <span className="icon entypo-plus scnd-font-color"></span>
      </a>
      <div className="profile-picture big-profile-picture clear">
        <img
          width="150px"
          alt="Anne Hathaway pic"
          src="http://upload.wikimedia.org/wikipedia/commons/e/e1/Anne_Hathaway_Face.jpg"
        />
      </div>
      <h1 className="user-name">Anne Hathaway</h1>
      <div className="profile-description">
        <p className="scnd-font-color">
          Lorem ipsum dolor sit amet consectetuer adipiscing
        </p>
      </div>

      <ul className="profile-options horizontal-list">
    <ProfileOption name='comments' icon='comment-alt' number='23' href='#40'/>
    <ProfileOption name='views' icon='eye-open' number='841' href='#41'/>
    <ProfileOption name='likes' icon='heart-empty' number='49' href='#42'/>
      </ul>
    </div>
  );
}

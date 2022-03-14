import React from "react";

export default function HeaderMenuTab({ name, icon }) {
  return (
    <li>
      {name === "Messages" ? (
        <div>
        <a className="header-menu-tab" href="#1">
          <span className={`icon ${icon} scnd-font-color`}></span>
          {name}
        </a>
        <a className="header-menu-number" href="#4">5</a>
        </div>
      ) : (
        <a className="header-menu-tab" href="#1">
          <span className={`icon ${icon} scnd-font-color`}></span>
          {name}
        </a>
      )}
    </li>
  );
}

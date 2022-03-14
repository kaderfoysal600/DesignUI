import React from "react";

export default function MenuBoxTab({name,number}) {
  return (
    <li>
      <a className="menu-box-tab" href="#6">
        <span className="icon fontawesome-envelope scnd-font-color"></span>
        {name}<div className="menu-box-number">{number}</div>
      </a>
    </li>
  );
}

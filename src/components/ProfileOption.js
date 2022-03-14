import React from "react";

export default function ProfileOption({ name,icon,number ,href}) {
  return (
    <li>
      <a className={name} href={href}>
        <p>
          <span className={`icon fontawesome-${icon} scnd-font-color`}></span>{number}
        </p>
      </a>
    </li>
  );
}

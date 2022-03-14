import React from "react";

export default function SocialMiddleElement({href, name, text}) {
  return (
    <li>
      <a href={href}>
        <div className={`${name} icon`}>
          <span className={`zocial-${name}`}></span>
        </div>
        <h2 className={`${name} titular`}>{text}</h2>
      </a>
    </li>
  );
}

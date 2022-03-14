import React from "react";

export default function MonthDataRatio({month,ratio}) {
  return (
    <li>
      <p>
        {month}<span className="scnd-font-color"> 2013</span>
      </p>
      <p>
        <span className="entypo-plus increment"> </span>{ratio}<sup>%</sup>
      </p>
    </li>
  );
}

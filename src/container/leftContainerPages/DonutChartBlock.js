import React from "react";
import OsPercentage from "../../components/OsPercentage";
import Porcion from "../../components/Porcion";

export default function DonutChartBlock() {
  return (
    <div className="donut-chart-block block">
      {" "}
      {/* DONUT CHART BLOCK (LEFT-CONTAINER)  */}
      <h2 className="titular">OS AUDIENCE STATS</h2>
      <div className="donut-chart">
        <Porcion id='porcion1' className="quesito ios" dataRel="21"/>
        <Porcion id='porcion2' className="quesito mac" dataRel="39"/>
        <Porcion id='porcion3' className="quesito win" dataRel="31"/>
        <Porcion id='porcionFin' className="quesito linux" dataRel="9"/>
        <p className="center-date">
          JUNE
          <br />
          <span className="scnd-font-color">2013</span>
        </p>
      </div>
      <ul className="os-percentages horizontal-list">
        <OsPercentage className="ios os scnd-font-color" os="ios" percentage="21" />
        <OsPercentage className="mac os scnd-font-color" os="mac" percentage="48" />
        <OsPercentage className="linux os scnd-font-color" os="Linux" percentage="9" />
        <OsPercentage className="win os scnd-font-color" os="Win" percentage="32" />
      </ul>
    </div>
  );
}

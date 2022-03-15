import React from "react";
import MonthDataRatio from "../../components/MonthDataRatio";
import Time from "../../components/Time";

export default function LineChartBlock() {
  return (
    <div className="line-chart-block block clear"> {/* LINE CHART BLOCK (LEFT-CONTAINER)  */}
      <div className="line-chart">
        <div className="grafico">
          <ul className="eje-y">
            <li data-ejeY="30"></li>
            <li data-ejeY="20"></li>
            <li data-ejeY="10"></li>
            <li data-ejeY="0"></li>
          </ul>
          <ul className="eje-x">
            <li>Apr</li>
            <li>May</li>
            <li>Jun</li>
          </ul>
          <span data-valor="25">
            <span data-valor="8">
              <span data-valor="13">
                <span data-valor="5">
                  <span data-valor="23">
                    <span data-valor="12">
                      <span data-valor="15"></span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </div>
      </div>
      <ul className="time-lenght horizontal-list">
        <Time duration="Week" href="#14" />
        <Time duration="Month" href="#15" />
        <Time duration="Year" href="#16" />
      </ul>
      <ul className="month-data clear">
        <MonthDataRatio month="APR" ratio="21" />
        <MonthDataRatio month="MAY" ratio="48" />
        <MonthDataRatio month="JUN" ratio="35" />
      </ul>
    </div>
  );
}

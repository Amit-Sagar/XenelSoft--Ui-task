import React from "react";
import assets from "../../assets";
import MixedChart from "../Charts/MixedChart";
import useWindowWidth from "../../helpers/hooks/useWindowWidth";

const DashboardChart = ({ title, labels, lineData, barData }) => {
  const windowWidth = useWindowWidth();
  const onMobile = windowWidth < 1000;
  const CHART_ICONS = [
    assets.icons.white.bar,
    assets.icons.white.line,
    assets.icons.white.retry,
    assets.icons.white.download,
  ];
  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, rgba(10,22,119,1) 0%, rgba(0,212,255,1) 44%, rgba(10,22,119,1) 100%)",
      }}
      className={`rounded-5 border-white px-4 py-3 blue-shadow ${
        onMobile ? " w-80p mx-auto" : "w-30p"
      }`}
    >
      <div className="flex justify-between items-center w-full">
        <img src={assets.icons.gradient.phone} alt="/" />
        <p className="fw-600">{title}</p>
        <div className="flex gap-8">
          {CHART_ICONS.map((item, key) => (
            <img src={item} alt="/" key={`item+${key}`} className="w-10 h-10" />
          ))}
        </div>
      </div>
      <div className="w-full">
        <MixedChart labels={labels} lineData={lineData} barData={barData} />
      </div>
    </div>
  );
};

export default DashboardChart;

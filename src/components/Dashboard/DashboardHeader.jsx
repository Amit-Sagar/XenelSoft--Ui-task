import React from "react";
import assets from "../../assets";
import "./dashboardHeader.scss";
import useWindowWidth from "../../helpers/hooks/useWindowWidth";
import Button from "../common/Button";

const DashboardHeader = () => {
  const headers = [
    {
      icon: assets.icons.blue.genAiIcon,
      title: "Performance Dashboard",
    },
    {
      icon: assets.icons.blue.AiIcon,
      title: "Analytics Dashboard",
    },
    {
      icon: assets.icons.blue.insightsIcon,
      title: "Actionable Insights",
    },
    {
      icon: assets.icons.blue.actionsIcons,
      title: "Reports",
    },
  ];

  return (
    <div className="dashboard-header rounded-5 border-white bg-blue-gradient flex justify-center items-center gap-20 ">
      <Button classes="emergency-logo" bgColor="yellow">
        <img src={assets.icons.blue.emergency} alt="/" />
      </Button>
      <div className="header-content">
        {headers.slice(0, 2).map((header, index) => (
          <div key={index} className="flex items-center header-item">
            <img src={header.icon} alt="/" />
            <p>{header.title}</p>
          </div>
        ))}
        <div className="header-logo">
          <img className="line" src={assets.icons.blue.line} alt="/" />
          <img src={assets.icons.blue.AIlogo} alt="/" />
          <img className="line" src={assets.icons.blue.line} alt="/" />
        </div>
        {headers.slice(2).map((header, index) => (
          <div key={index} className="flex items-center gap-8 header-item">
            <img src={header.icon} alt="/" />
            <p>{header.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardHeader;

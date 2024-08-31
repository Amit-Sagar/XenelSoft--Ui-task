import React from "react";
import "./dashboardCard.scss";
import Button from "../common/Button";
import assets from "../../assets";

const DashboardCard = ({ title, value, icon, success, change }) => {
  return (
    <div className="flex justify-between items-center px-4 py-1 dashboard-card mt-3">
      <Button classes=" rounded-full button" bgColor="darkBlue">
        <img src={icon} alt="/" />
      </Button>
      <div className="fw-600 content">
        <p className="p-0 text-nowrap">{title}</p>
        <p className="text-center p-0">{value}</p>
      </div>
      <div className="flex-column gap-28 justify-end">
        <div className="flex justify-end px-1">
          <img src={assets.icons.white.menu} alt="/" className="h-20 w-20 " />
        </div>
        <div
          className={`flex justify-center gap-4 h-30  w-80 rounded-20 text-center ${
            success ? "bg-success c-success" : "bg-red c-danger"
          }`}
        >
          <img
            src={
              success
                ? assets.icons.gradient.upArrow
                : assets.icons.gradient.downArrow
            }
            alt="/"
          />
          <p className="mt-1"> {change}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;

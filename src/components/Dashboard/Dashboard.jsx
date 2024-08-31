import React, { useState } from "react";
import DashboardCard from "./DashboardCard";
import "./dashboard.scss";
import DashboardHeader from "./DashboardHeader";
import DashboardChart from "./DashboardChart";
import Button from "../common/Button";
import { DASHBOARD_CARD_DATA, DASHBOARD_CHART_DATA, TABS_DATA } from "./data";
import useWindowWidth from "../../helpers/hooks/useWindowWidth";
import assets from "../../assets";

const Dashboard = () => {
  const windowWidth = useWindowWidth();
  const onMobile = windowWidth < 1000;
  const onMidScreen = windowWidth < 1200;
  const [selected, setSelected] = useState(2);

  return (
    <div className={`dashboard w-90p`}>
      <DashboardHeader />
      <div>
        <div className="flex gap-32 items-center mt-10 mb-4 px-4 tab-section">
          <div className="flex gap-32 ">
            <Button
              width="100px"
              height="40px"
              bgColor="primary"
              classes="flex gap-4 justify-center items-center"
            >
              <img src={assets.icons.white.calendar} alt="/" />
              <span>From</span>
            </Button>
            <Button
              width="100px"
              height="40px"
              bgColor="primary"
              classes="flex gap-4 justify-center items-center"
            >
              <img src={assets.icons.white.calendar} alt="/" />
              <span>To</span>
            </Button>
          </div>
          <div
            className={`flex gap-28 border-blue rounded-30 py-2 blue-shadow ${
              onMobile ? "px-3" : "px-8"
            }`}
          >
            {TABS_DATA.map((item) => (
              <div
                key={item.id}
                className={`flex gap-4 items-center ${
                  selected === item.id && "bg-primary px-2 py-0"
                } rounded-20 cursor-pointer`}
                onClick={() => setSelected(item.id)}
              >
                <img src={item.icons} alt="/" className="h-20 w-20" />
                <p className={`text-nowrap ${onMobile ? "fs-10" : "fs-16"}`}>
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex flex-wrap gap-20 items-center justify-center">
          {DASHBOARD_CARD_DATA.map((item) => (
            <DashboardCard
              title={item.title}
              value={item.value}
              change={item.change}
              success={item.success}
              key={item.id}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
      <div className="chart-section gap-12 mt-10">
        {DASHBOARD_CHART_DATA.map((item) => (
          <DashboardChart
            key={item.id}
            title={item.title}
            labels={item.labels}
            linedata={item.linedata}
            barData={item.barData}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

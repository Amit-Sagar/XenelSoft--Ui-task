import React from "react";
import "./sidebar.scss";
import assets from "../assets";
import Button from "./common/Button";
import useWindowWidth from "../helpers/hooks/useWindowWidth";

const Sidebar = () => {
  const windowWidth = useWindowWidth();
  const onMobile = windowWidth < 1000;
  const { home, phone, network, pieChart, hammer, car, left } =
    assets.icons.gradient;
  const sidebarIcons = [home, phone, network, pieChart, hammer, car, left];
  return (
    <div
      className={`flex-column gap-40 py-8 sidebar-border  my-15 h-600 ${
        onMobile ? "w-5p px-4" : "w-5p pl-3"
      }`}
    >
      {sidebarIcons.map((item) => (
        <Button
          bordered
          height={onMobile ? "28px" : "48px"}
          width={onMobile ? "28px" : "48px"}
          classes="hover-scale"
        >
          <img src={item} alt="/" className={onMobile && "h-10 w-10"} />
        </Button>
      ))}
    </div>
  );
};

export default Sidebar;

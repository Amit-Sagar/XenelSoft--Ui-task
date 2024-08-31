import React, { useState } from "react";
import "./header.scss";
import assets from "../../assets/index";
import Button from "../common/Button";
import useWindowWidth from "../../helpers/hooks/useWindowWidth";

const Header = () => {
  const [selectedIcon, setSelectedIcon] = useState(0);
  const [open, setOpen] = useState(false);
  const windowWidth = useWindowWidth();
  const onMobile = windowWidth < 1000;
  const onMidScreen = windowWidth < 1400;
  const icons = [
    assets.icons.gradient.notifications,
    assets.icons.gradient.snoozenotification,
    assets.icons.gradient.lineStar,
    assets.icons.gradient.filedoc,
    assets.icons.gradient.clock,
    assets.icons.gradient.doc,
    assets.icons.gradient.history,
  ];

  const HEADER_BUTTONS = [
    {
      id: 1,
      color: "red",
      icon: assets.icons.black.leftArrow,
    },
    {
      id: 2,
      color: "yellow",
      icon: assets.icons.black.home,
    },
    {
      id: 3,
      color: "green",
      icon: assets.icons.black.rightArrow,
    },
  ];
  return (
    <header className=" flex justify-between items-center header">
      <div className={`flex items-center ${onMobile ? "gap-20" : "gap-48"}`}>
        <div className="relative mt-0">
          <img
            src={assets.icons.gradient.logo}
            alt="/"
            className="header-logo"
          />
          <img
            src={assets.icons.gradient.headerBorder}
            alt="/"
            className={`absolute mt-0 top-0 left-0 header-logo-border`}
          />
        </div>
        <div className="button-container ">
          <div className="header-buttons">
            {HEADER_BUTTONS.map((item) => (
              <Button key={item.id} bgColor={item.color} classes="button">
                <img src={item.icon} alt="/" />
              </Button>
            ))}
          </div>
          <div className="flex header-buttons">
            <Button bgColor="blue" classes="button">
              <img src={assets.icons.black.location} alt="/" />
            </Button>
            <Button bgColor="white" classes="button">
              <img src={assets.icons.black.menu} alt="/" />
            </Button>
          </div>
        </div>
      </div>
      <div>
        <img
          src={assets.icons.gradient.headerCenter}
          alt="/"
          className={`${onMobile ? "w-350" : "w-500 h-70"}`}
        />
      </div>
      <div className="flex gap-20 relative">
        {!!onMidScreen ? (
          <div>
            <div onClick={() => setOpen(!open)}>
              <img src={icons[selectedIcon]} alt="/" />
            </div>
            {open && (
              <div className=" flex flex-column absolute top-5 bg-black  border-blue blue-shadow w-20 px-3 z-full">
                {icons.map((item, key) => (
                  <img
                    key={`item+${key}`}
                    src={item}
                    className="hover-scale"
                    alt="/"
                    onClick={() => {
                      setSelectedIcon(key);
                      setOpen(false);
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="header-icons ">
            {icons.map((item, key) => (
              <img
                key={`item+${key}`}
                src={item}
                className="hover-scale"
                alt=""
                onClick={() => setSelectedIcon(key)}
              />
            ))}
          </div>
        )}
        <div>
          <Button
            classes="header-title text-nowrap"
            bgColor="blue"
          >
            UP 112 Admin
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

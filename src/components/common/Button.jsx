import React from "react";
import "./button.scss";

const Button = ({
  children,
  loading,
  onClick,
  disabled,
  bordered = false,
  classes,
  bgColor = false,
  height,
  width,
}) => {
  const colors = {
    blue: "#C3DCF8",
    white: "#ECF4FD",
    green: "#B0FFCF",
    red: "#FFB0B0",
    yellow: "#ECECEC",
    darkBlue: "#194280",
    primary: "#3881D5",
  };
  return (
    <button
      style={{
        background: !bgColor
          ? "linear-gradient(90deg, rgba(49, 40, 74, 0.48) 0%, rgba(137, 124, 189, 0.216) 48.5%, rgba(58, 48, 86, 0.48) 100%)"
          : colors[bgColor],
        height: !!height && height,
        width: !!width && width,
        opacity: disabled && 0.5,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
      onClick={onClick}
      disabled={disabled}
      className={`${classes} ${!!bordered && "bordered"} rounded-5 c-white`}
    >
      {!!loading ? "...LOADING" : children}
    </button>
  );
};

export default Button;

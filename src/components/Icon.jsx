import React from "react";
import "./styles/Icon.css";

const Icon = (props) => {
  console.log(props);
  return (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 16 16"
        className="icon"
      >
        <path d={props.iconObj} />
      </svg>
    </span>
  );
};

export default Icon;

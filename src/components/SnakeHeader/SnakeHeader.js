import React, { memo } from "react";
import "../../App.css";
import "../../utils.css";

const SnakeHeader = () => {
  return (
    <div className="flex">
      <div className="title">SNAKE</div>
    </div>
  );
};

export default memo(SnakeHeader);

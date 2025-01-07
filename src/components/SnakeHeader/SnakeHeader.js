import React, { memo } from "react";


const SnakeHeader = () => {
  return (
    <div className="snakeFlex">
      <div className="title">SNAKE</div>
      <img src="https://cdn-icons-png.flaticon.com/512/7399/7399705.png " width="50" height="50" alt="snake-image" loading="lazy" />
    </div>
  );
};

export default memo(SnakeHeader);

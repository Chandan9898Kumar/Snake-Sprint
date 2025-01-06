import PropTypes from "prop-types";
import React, { memo } from "react";

const ScoreBoard = ({ currentScore, bestScore }) => {
  return (
    <div className="flex flex-col">
      <div className="score">{currentScore}</div>
      <div className="best-score">
        <span className="subTitle">{"best:"}&nbsp;</span>
        {bestScore}
      </div>
    </div>
  );
};

ScoreBoard.propTypes = {
  currentScore: PropTypes.number.isRequired,
  bestScore: PropTypes.number.isRequired,
};
ScoreBoard.defaultProps = {
  currentScore: 0,
  bestScore: 0,
};

export default memo(ScoreBoard);

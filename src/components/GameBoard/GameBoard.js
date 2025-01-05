import React, { memo } from "react";
// import "../../App.css";
// import "../../utils.css";
import BoardCell from "components/BoardCell/BoardCell";
const GameBoard = (props) => {

  let board = []
  let boardWidth = props.boardWidth
  let boardHeight = props.boardHeight
  let foodCoordinate = props.foodCoordinate
  return (
    <div className="flex">
      <div className="game-board">{board}</div>
    </div>
  );
};

export default memo(GameBoard);

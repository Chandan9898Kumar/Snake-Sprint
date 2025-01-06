import React, { memo } from "react";
/**
 * The `BoardCell` function in JavaScript returns a div element with specific styling based on the
 * `cellType` prop passed to it.
 * @param props - The `props` parameter in the `BoardCell` component contains the properties that are
 * passed to the component when it is used. These properties can include `cellType`, which determines
 * the type of cell to render (e.g., "none", "head", "body", "food"), and `
 * @returns The `BoardCell` component is returning a `div` element with the class name "board-cell
 * flex-center" containing another `div` element based on the `cellType` prop passed to it. The inner
 * `div` element's class is determined by the `cellType` prop and additional classes like "snake-head",
 * "snake-body", or "snake-food" based on the conditions in
 */
const BoardCell = (props) => {
    let cellType = props.cellType;
    let cell;

    switch (cellType) {
        case "none":
            cell = <div></div>;
            break;
        case "head":
            cell = <div className="snake-head"></div>;
            break;
        case "body":
            cell = <div className="snake-body"></div>;
            break;
        case "food":
            cell = <div className={"snake-food " + props.foodClass}></div>;
            break;
        default:
            cell = <div></div>;
            break;
    }

    return <div className="board-cell flex-center">{cell}</div>;
};

export default memo(BoardCell);

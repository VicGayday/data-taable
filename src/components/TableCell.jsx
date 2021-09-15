import React from "react";
import "../styles/App.css";

const TableCell = ({tableCell}) => {
  return (
    <div className="row">
      <div className="cell">
        {tableCell.date} {tableCell.title} {tableCell.quantity} {tableCell.distance}
      </div>
    </div>
  );
};

export default TableCell;

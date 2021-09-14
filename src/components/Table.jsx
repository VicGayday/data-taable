import React from "react";
import "../styles/App.css";
import TableHead from '../components/TableHead'
import TableCell from '../components/TableCell'

const Table = ({tableHeaders, title}) => {

  return (
    <div>
      <h1>{title}</h1>
      <div className="table-container">
        <div className="wrapper">
          {tableHeaders.map((tableHeader) => (
            <TableHead tableHeader={tableHeader} key={tableHeader.id} />
          ))}
        </div>
        <div className="wrapper">
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
        </div>
        <div className="wrapper">
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
        </div>
      </div>
    </div>
  );
};

export default Table;

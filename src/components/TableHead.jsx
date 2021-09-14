import React from 'react'
import '../styles/App.css'

const TableHead = ({tableHeader}) => {

  return (
        <div className="header">
      <div className="cell">
        <strong>
        {tableHeader.id}. {tableHeader.name}
        </strong>
      </div>
    </div>
  );
}

export default TableHead
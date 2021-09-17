import React from 'react'
import '../styles/App.css'

const Pagination = ({cellsPerPage, totalCells, currentPage, setCurrentPage}) => {

  const pageNumbers = []

  for (let i =1; i<= Math.ceil(totalCells / cellsPerPage); i+=1) {
    pageNumbers.push(i)
  }

  return (
    <div className="pagination__wrap">
      {pageNumbers.map((it) => (
          <span
            className={currentPage === it ? "pagination page__current" : "pagination"}
            key={it}
            onClick={() => setCurrentPage(it)}
            >
            {it}
            </span>
        ))}
    </div>
  );
}

export default Pagination

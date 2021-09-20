import React, { useState, useMemo, useEffect } from "react";
import axios from "axios";
import "./styles/App.css";
import Table from "./components/Table";
import InputForm from "./components/InputForm";
import SortCells from "./components/SortCells";
import Pagination from "./components/Pagination.jsx";

function App() {
  const [tableCells, setTableCells] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "", condition: "" });
  const [cellsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const sortedCells = useMemo(() => {
    return filter.sort
      ? [...tableCells].sort((a, b) => a[filter.sort] >= b[filter.sort])
      : tableCells;
  }, [filter.sort, tableCells]);

  const conditionCells = useMemo(() => {
      switch (filter.condition) {
      case "equals":
        return [...sortedCells].filter(
          (item) => item[filter.sort] == filter.query  //использование нечеткого равенства для приведения типов
        );
      case "contains":
        return [...sortedCells].filter((item) =>
          item[filter.sort].includes(filter.query)
        );
      case "more":
        return [...sortedCells].filter(
          (item) => item[filter.sort] > filter.query
        );
      case "less":
        return [...sortedCells].filter(
          (item) => item[filter.sort] < filter.query
        );
      default:
        return sortedCells;
    }
  }, [filter, sortedCells]);

  const createNewCell = (newCell) => {
    setTableCells([...tableCells, newCell]);
  };

  const lastCellIndex = currentPage * cellsPerPage;
  const firstCellIndex = lastCellIndex - cellsPerPage;
  const currentCell = conditionCells.slice(firstCellIndex, lastCellIndex);

  async function getData() {
      const response = await axios(
      "https://my.api.mockaroo.com/cars.json?key=d8c66fd0"
    );
    setTableCells(response.data)

  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <InputForm create={createNewCell} />
      <SortCells filter={filter} setFilter={setFilter} />
      <Table tableCells={currentCell} />
      <Pagination
        cellsPerPage={cellsPerPage}
        totalCells={conditionCells.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;

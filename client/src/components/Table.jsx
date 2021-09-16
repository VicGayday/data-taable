import React from "react";
import '../styles/App.css';
// import TableHead from "../components/TableHead";
// import TableCell from "../components/TableCell";

const Table = ({tableCells}) => {
  //   const list = [
  //   {
  //     id: 1,
  //     date: "12.06.2021",
  //     title: "Bread",
  //     quantity: "5",
  //     distance: "12",
  //   },
  //   {
  //     id: 2,
  //     date: "13.06.2021",
  //     title: "Eggs",
  //     quantity: "6",
  //     distance: "13",
  //   },
  //   {
  //     id: 3,
  //     date: "14.06.2021",
  //     title: "Milk",
  //     quantity: "7",
  //     distance: "14",
  //   },
  // ];
  return (
    <div className="wrapper">
      <h1>Таблица</h1>
      <div className="table">
        <div className="row">
          <div className="box">Дата</div>
          <div className="box">Наименование</div>
          <div className="box">Количество</div>
          <div className="box">Расстояние</div>
        </div>

        {tableCells.map((it) => {
          return (
            <div key={it.id} className="row">
              <div className="box">{it.date}</div>
              <div className="box">{it.title}</div>
              <div className="box">{it.quantity}</div>
              <div className="box">{it.distance}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Table;
import React from "react";
import '../styles/App.css';

const Table = ({tableCells}) => {

  return (
    <div className="wrapper">
      <h1>Список автомобилей с пробегом</h1>
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
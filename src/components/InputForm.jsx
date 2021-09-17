import React, {useState} from "react";
import MyButton from '../components/UI/button/MyButton'
import MyInput from '../components/UI/input/MyInput'
import "../styles/App.css";

const InputForm = ({create}) => {

  const [newCells, setNewCells] = useState({
    date: "",
    title: "",
    quantity: "",
    distance: "",
  });

  const addNewTableCell = (e) => {
    e.preventDefault();
    const newCell = {
      ...newCells, id: Date.now()
    }
    create(newCell)
    // setTableCells([...tableCells, { ...newCells, id: Date.now() }]);
    setNewCells({ date: "", title: "", quantity: "", distance: "" });
  };

  return (
    <form>
      <MyInput
        type="text"
        value={newCells.date}
        onChange={(e) => setNewCells({ ...newCells, date: e.target.value })}
        placeholder="Дата"
      />
      <MyInput
        type="text"
        value={newCells.title}
        onChange={(e) => setNewCells({ ...newCells, title: e.target.value })}
        placeholder="Название"
      />
      <MyInput
        type="text"
        value={newCells.quantity}
        onChange={(e) => setNewCells({ ...newCells, quantity: e.target.value })}
        placeholder="Количество"
      />
      <MyInput
        type="text"
        value={newCells.distance}
        onChange={(e) => setNewCells({ ...newCells, distance: e.target.value })}
        placeholder="Расстояние"
      />
      <MyButton onClick={addNewTableCell}>Добавить</MyButton>
    </form>
  );
};

export default InputForm;

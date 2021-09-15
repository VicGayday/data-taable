import React, {useState} from 'react'
import './styles/App.css'
import Table from './components/Table'
import MyButton from './components/UI/button/MyButton.jsx'
import MyInput from './components/UI/input/MyInput.jsx'

function App() {

  const [tableCells, setTableCells] = useState([
    {
      id: 1,
      date: "12/09/2021",
      title: "Bread",
      quantity: "5",
      distance: "12",
    },
    {
      id: 2,
      date: "15/09/2021",
      title: "Eggs",
      quantity: "10",
      distance: "5",
    },
    {
      id: 3,
      date: "18/09/2021",
      title: "Milk",
      quantity: "2",
      distance: "7",
    },
  ]);

const [newCells, setNewCells] = useState({date: '', title: '', quantity: '', distance: ''})

const addNewTableCell = (e) => {
  e.preventDefault()
  setTableCells([...tableCells, {...newCells, id: Date.now()}])
  setNewCells({ date: "", title: "", quantity: "", distance: "" });
}

  return (
    <div className="App">
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
          onChange={(e) =>
            setNewCells({ ...newCells, quantity: e.target.value })
          }
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
      <Table tableCells={tableCells} />
    </div>
  );
}

export default App;

import React, {useState} from 'react'
import './styles/App.css'
import Table from './components/Table'
import MyButton from './components/UI/button/MyButton.jsx'
// import TableHead from './components/TableHead'

function App() {
  const [tableHeaders] = useState([
    { id: 1, name: "Дата" },
    { id: 2, name: "Название" },
    { id: 3, name: "Количество" },
    { id: 4, name: "Расстояние" },
  ]);
  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Дата" />
        <input type="text" placeholder="Название" />
        <input type="text" placeholder="Количество" />
        <input type="text" placeholder="Расстояние" />
        <MyButton>Добавить</MyButton>
      </form>
      <Table tableHeaders={tableHeaders} title="Некие данные" />
    </div>
  );
}

export default App;

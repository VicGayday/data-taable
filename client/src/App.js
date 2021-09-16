import React, {useState, useMemo} from 'react'
import './styles/App.css'
import Table from './components/Table'
// import MyButton from './components/UI/button/MyButton.jsx'
import MyInput from './components/UI/input/MyInput.jsx'
import InputForm from './components/InputForm'
import MySelect from './components/UI/select/MySelect';

import source from './cars.json'

function App() {

  const dataset = source.map(it => ({
    id: it.id,
    date: it.date,
    title: it.title,
    quantity: it.quantity,
    distance: it.distance
  }))

  const [tableCells, setTableCells] = useState(dataset);

  const [selectedColumn, setSelectedColumn] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const sortedCells = useMemo(() => {
    return selectedColumn
      ? [...tableCells].sort((a, b) => a[selectedColumn] >= b[selectedColumn])
      : tableCells;
  }, [selectedColumn, tableCells])

  // const sortedAndSearchedCells = useMemo(() => {
  //   return sortedCells.filter(tableCell => tableCell.title.includes(searchQuery))
  // }, [searchQuery, sortedCells])


  const createNewCell = (newCell) => {
    setTableCells([...tableCells, newCell])
  }

  const sortColumns = (column) => {
    setSelectedColumn(column)
  }

  // const more = searchQuery > selectedColumn
  // const less = searchQuery < selectedColumn
  // const includes = searchQuery.includes(selectedColumn)

  return (
    <div className="App">
      <InputForm create={createNewCell} />
      <div>
        <MyInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Сортировать по"
        />
        <MySelect
          value={selectedColumn}
          onChange={sortColumns}
          defaultValue="Выбор колонки"
          options={[
            { value: "title", name: "Название" },
            { value: "quantity", name: "Количество" },
            { value: "distance", name: "Расстояние" },
          ]}
        />
        <MySelect
          value={selectedColumn} //searchQuery
          onChange={sortColumns}
          defaultValue="Выбор условия"
          options={[
            { value: "title", name: "Равно" },
            { value: "quantity", name: "Содержит" },
            { value: "distance", name: "Больше" },
            { value: "less", name: "Меньше" },
          ]}
        />
      </div>
      <Table tableCells={sortedCells} />
    </div>
  );
}

export default App;

import React, {useState, useMemo, useEffect} from 'react'
import axios from 'axios'
import './styles/App.css'
import Table from './components/Table'
import InputForm from './components/InputForm'
import SortCells from './components/SortCells';


// import source from './cars.json'

function App() {

  // const dataset = source.map(it => ({
  //   id: it.id,
  //   date: it.date,
  //   title: it.title,
  //   quantity: it.quantity,
  //   distance: it.distance
  // }))

  const [tableCells, setTableCells] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''})

  // const [selectedColumn, setSelectedColumn] = useState('')
  // const [searchQuery, setSearchQuery] = useState('')

  const sortedCells = useMemo(() => {
    return filter.sort
      ? [...tableCells].sort((a, b) => a[filter.sort] >= b[filter.sort])
      : tableCells;
  }, [filter.sort, tableCells])

  // const sortedAndSearchedCells = useMemo(() => {
  //   return sortedCells.filter(tableCell => tableCell.title.includes(searchQuery))
  // }, [searchQuery, sortedCells])


  const createNewCell = (newCell) => {
    setTableCells([...tableCells, newCell])
  }

  async function getData() {
    const response = await axios(
      "https://my.api.mockaroo.com/cars.json?key=d8c66fd0"
    );
    setTableCells(response.data)
  }

  useEffect(() => {
    getData()
  }, [])

  // const sortColumns = (column) => {
  //   setSelectedColumn(column)
  // }

  // const more = searchQuery > selectedColumn
  // const less = searchQuery < selectedColumn
  // const includes = searchQuery.includes(selectedColumn)

  return (
    <div className="App">
      <InputForm create={createNewCell} />
      <SortCells filter={filter} setFilter={setFilter}/>
      <Table tableCells={sortedCells} />
    </div>
  );
}

export default App;

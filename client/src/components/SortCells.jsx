import React from 'react'
import MyInput from '../components/UI/input/MyInput'
import MySelect from '../components/UI/select/MySelect'

const SortCells = ({filter, setFilter}) => {
  return (
  <div>
    <MyInput
      value={filter.query}
      onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      placeholder="Сортировать по"
    />
    <MySelect
      value={filter.sort}
      onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
      defaultValue="Выбор колонки"
      options={[
        { value: "title", name: "Название" },
        { value: "quantity", name: "Количество" },
        { value: "distance", name: "Расстояние" },
      ]}
    />
    <MySelect
      value={filter.sort} //searchQuery
      onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
      defaultValue="Выбор условия"
      options={[
        { value: "title", name: "Равно" },
        { value: "quantity", name: "Содержит" },
        { value: "distance", name: "Больше" },
        { value: "less", name: "Меньше" },
      ]}
    />
  </div>
  )}

export default SortCells
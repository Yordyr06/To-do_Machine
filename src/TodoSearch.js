import React from "react";
import './TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (searchValue) => {
    setSearchValue(searchValue.target.value)
  }
  
  return(
    <input
      className="TodoSearch"
      placeholder="Escribe una tarea pendiente"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
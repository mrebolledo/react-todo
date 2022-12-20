import React from 'react'
import './TodoSearch.css'
import { TaskContext } from '../../context/taskContext'

function TodoSearch() {
    const {searchValue, setSearchValue} = React.useContext(TaskContext)
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value)
    }
    return (
        <input 
            className="TodoSearch" 
            placeholder="Buscar tarea"
            value={searchValue}
            onChange={onSearchValueChange}
        >
        </input>
    )
}

export { TodoSearch }
import React from 'react';
import './TodoCounter.css'
import { TaskContext } from '../../context/taskContext';
function TodoCounter() {
    const {completed, total} = React.useContext(TaskContext)
    return (
        <h2 className="TodoCounter">
            You has completed {completed} of {total} TODOs
        </h2>
    )
}

export { TodoCounter }
import React from 'react';
import { TaskContext } from '../../context/taskContext';
import './taskForm.css'

function TaskForm() {

    const [newTaskValue, setNewTaskValue] = React.useState('')

    const {
        addTask,
        setOpenModal
    } = React.useContext(TaskContext)

    const onChange = (event) => {
        setNewTaskValue(event.target.value)
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        addTask(newTaskValue)
        setOpenModal(false)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Add new Task</label>
            <textarea 
                value={newTaskValue}
                onChange={onChange}
                placeholder="Name of your task"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    onClick={onCancel}
                    className="TodoForm-button TodoForm-button--cancel"
                >Cancel</button>
                <button 
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >Add</button>
            </div>
        </form>
    )
}

export { TaskForm }
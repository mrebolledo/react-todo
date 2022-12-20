import React from 'react'
import { TodoCounter } from '../components/TodoCounter/TodoCounter'
import { TodoSearch } from '../components/TodoSearch/TodoSearch'
import { TodoList} from '../components/TodoList/TodoList'
import { TodoItem } from '../components/TodoItem/TodoItem'
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton';
import { TaskContext } from '../context/taskContext'
import { Modal } from '../modal'
import { TaskForm } from '../components/TaskForm/TaskForm'

function AppUI() {
    const {
        error, 
        loading, 
        filteredTasks,
        completeTask, 
        deleteTask,
        openModal,
        setOpenModal,
    } = React.useContext(TaskContext)
    
    return(
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList> 
                {error && <p>ui error</p>}
                {loading && <p>Estamos cargando</p>}
                {(!loading && !filteredTasks.length) && <p>Crea tu primer Task</p> }
                {filteredTasks.map(task => (
                <TodoItem 
                    key={task.text}
                    text={task.text}
                    completed={task.completed}
                    onComplete={() => completeTask(task.text)}
                    onDelete={() => deleteTask(task.text)}
                ></TodoItem>
                ))}
            </TodoList>
            
            {!!openModal && (
                <Modal>
                    <TaskForm />
                </Modal>
            )}

            <CreateTodoButton setOpenModal={setOpenModal} />
        </React.Fragment>
    )
}

export {AppUI}
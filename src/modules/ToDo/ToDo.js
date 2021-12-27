import React, { useEffect, useState } from 'react'
import TaskAddingForm from './TaskAddingForm/TaskAddingForm'
import TaskCounter from './TaskCounter/TaskCounter'
import TaskList from './TaskList/TaskList'
import './ToDo.scss'

const ToDo = (props) => {

    let tasksFromLocalStorage = []
    if (!window.localStorage.getItem('tasks')) tasksFromLocalStorage = []
    if (window.localStorage.getItem('tasks')) tasksFromLocalStorage = JSON.parse(window.localStorage.getItem('tasks'))
    const [tasks, setTasks] = useState(tasksFromLocalStorage)

    useEffect(() => {
        window.localStorage.setItem('tasks', JSON.stringify(tasks))
    })
    
    return (
        <section className='ToDo'>
            <TaskAddingForm 
                tasks={tasks}
                setTasks={setTasks}
            />
            <TaskCounter taskCount={tasks.length}/>
            <TaskList 
                tasks={tasks}
                setTasks={setTasks}
            />
        </section>
    )
}

export default ToDo
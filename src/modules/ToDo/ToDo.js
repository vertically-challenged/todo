import React, { useState } from 'react'
import TaskAddingForm from './TaskAddingForm/TaskAddingForm'
import TaskCounter from './TaskCounter/TaskCounter'
import TaskList from './TaskList/TaskList'
import './ToDo.scss'

const ToDo = (props) => {
    const [tasks, setTasks] = useState([])
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
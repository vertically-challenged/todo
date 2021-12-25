import React, { useState } from 'react'
import TaskAddingForm from './TaskAddingForm/TaskAddingForm'
import TaskCounter from './TaskCounter/TaskCounter'
import TaskList from './TaskList/TaskList'
import './ToDo.scss'

const ToDo = (props) => {
    const [tasks, setTasks] = useState(['12'])
    return (
        <section>
            <TaskAddingForm/>
            <TaskCounter taskCount={tasks.length}/>
            <TaskList/>
        </section>
    )
}

export default ToDo
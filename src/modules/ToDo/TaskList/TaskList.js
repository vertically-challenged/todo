import React from 'react'
import './TaskList.scss'

import Task from './Task/Task'

const creatingTaskList = (tasks, setTasks) => {
    if (!tasks.length) return []
    let taskList = []

    tasks.map((task, index) => {
        taskList.push(<Task 
            key={index}
            tasks={tasks} 
            setTasks={setTasks} 
            index={index}
            task={task}/>)
    })
    return taskList
}

const TaskList = ({tasks, setTasks}) => {
    return (
        <ul className='TaskList'>
            {creatingTaskList(tasks, setTasks)}
        </ul>
    )
}

export default TaskList
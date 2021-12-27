import React, { useState } from 'react'
import Checkbox from '../../../common/Checkbox/Checkbox'
import CrossButton from '../../../common/CrossButton/CrossButton'
import './Task.scss'

const checkBoxOnChangeHandler = (task, tasks, setTasks, index) => {
    let newArrTask = [...tasks]
    newArrTask[index].completed = (task.completed == true) ? false: true
    setTasks(tasks = [...newArrTask])
}

const crossButtonOnClick = (tasks, setTasks, index) => {
    let newArrTask = [...tasks]
    newArrTask.splice(index, 1)
    setTasks(tasks = [...newArrTask])
}

const Task = ({tasks, setTasks, index, task}) => {

    return (
        <li className='Task'>
            <Checkbox 
                index={index}
                completed={task.completed}
                onChange={() => checkBoxOnChangeHandler(task, tasks, setTasks, index)}
            />
            {task.completed || <span>{task.text}</span>}
            {!task.completed || <span className='crossedOut'>{task.text}</span>}
            <CrossButton 
                onClick={() => {
                    crossButtonOnClick(tasks, setTasks, index)
                }}
            />
        </li>)
}

export default Task
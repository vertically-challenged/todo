import React, { useState } from 'react'
import Checkbox from '../../../common/Checkbox/Checkbox'
import CrossButton from '../../../common/CrossButton/CrossButton'
import './Task.scss'

const checkBoxOnChangeHandler = (completed, setCompleted) => { 
    (completed == true) ? setCompleted(completed = false) : setCompleted(completed = true)
}

const crossButtonOnClick = (tasks, setTasks, index) => {
    let newArrTask = [...tasks]
    newArrTask.splice(index, 1)
    setTasks(tasks = [...newArrTask])
}

const Task = ({children, tasks, setTasks, index}) => {
    const [completed, setCompleted] = useState(false)

    return (
        <li className='Task'>
            <Checkbox 
                completed={completed}
                onChange={() => checkBoxOnChangeHandler(completed, setCompleted)}
            />
            {completed || <span>{children}</span>}
            {!completed || <span className='crossedOut'>{children}</span>}
            <CrossButton 
                onClick={() => {
                    crossButtonOnClick(tasks, setTasks, index)
                }}
            />
        </li>)
}

export default Task
import React, {useState, useEffect, useRef} from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import './TaskList.scss'

import Task from './Task/Task'

const creatingTaskList = (tasks, setTasks, setScroll) => {
    if (!tasks.length) return []
    let taskList = []

    function onChangeVisibilitySensor (isVisible) {
        if (isVisible) {
            setScroll(true) 
        } else {
            setScroll(false)
        }
    }

    tasks.map((task, index) => {
        if (index == tasks.length-1) {
            taskList.push(<VisibilitySensor onChange={onChangeVisibilitySensor}>
                <Task 
                key={index}
                tasks={tasks} 
                setTasks={setTasks} 
                index={index}
                task={task}/>
                </VisibilitySensor>)
        } else {
            taskList.push(<Task 
                key={index}
                tasks={tasks} 
                setTasks={setTasks} 
                index={index}
                task={task}/>)
        }
    })
    return taskList
}

const TaskList = ({tasks, setTasks}) => {
    const [scroll, setScroll] = useState(true)
    const List = useRef(null)
    useEffect(() => {
        if (scroll) {
            List.current.childNodes[List.current.childNodes.length-1].scrollIntoView()
        }
    }, [tasks])

    return (
        <ul ref={List} className='TaskList'>
            {creatingTaskList(tasks, setTasks, setScroll)}
        </ul>
    )
}

export default TaskList
import React, {useState, useEffect, useRef} from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import './TaskList.scss'

import Task from './Task/Task'

const onChangeVisibilitySensor = (isVisible, setScroll) => {
    setScroll(isVisible) 
}

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
            <VisibilitySensor onChange={(isVisible) => {
                onChangeVisibilitySensor(isVisible, setScroll)
            }}>
                <div className='Sensor'></div>
            </VisibilitySensor>
        </ul>
    )
}

export default TaskList
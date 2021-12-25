import React from 'react'
import './TaskCounter.scss'

const TaskCounter = ({taskCount}) => {
    return (
        <section className='TaskCounter'>
            {taskCount == 0 && <p>У вас пока нет задач, добавьте новую</p>}
            {taskCount > 0 && <p>Количество задач: {taskCount}</p>}
        </section>
    )
}

export default TaskCounter
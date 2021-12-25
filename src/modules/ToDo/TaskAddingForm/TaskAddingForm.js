import React, { useState } from 'react'
import Input from '../../common/Input/Input'
import './TaskAddingForm.scss'

const onSubmitHandler = (event, inputValue, setInputValue) => {
    event.preventDefault()
    setInputValue(inputValue = '')
}

const TaskAddingForm = () => {
    const [inputValue, setInputValue] = useState('')
    return (
        <section className='TaskAddingForm'>
            <form 
                action="/" 
                method='post'
                onSubmit={(event) => {
                    onSubmitHandler(event, inputValue, setInputValue)
                }}
            >
                <Input 
                    placeHolder={'Введите название задачи'}
                    value={inputValue}
                    onChange={(event) => {
                        setInputValue(event.target.value)
                    }}
                />
            </form>
        </section>
    )
}

export default TaskAddingForm
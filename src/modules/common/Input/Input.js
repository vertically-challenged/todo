import React from 'react'
import './Input.scss'

const Input = ({placeholder, value, onChange}) => {
    return (
        <input 
            className='Input' 
            type='text'
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}

export default Input
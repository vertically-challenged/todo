import React from 'react'
import './Input.scss'

const Input = ({placeHolder, value, onChange}) => {
    return (
        <input 
            className='Input' 
            type='text'
            placeHolder={placeHolder}
            value={value}
            onChange={onChange}
        />
    )
}

export default Input
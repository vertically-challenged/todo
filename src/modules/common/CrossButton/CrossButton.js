import React from 'react'
import './CrossButton.scss'

const CrossButton = ({onClick}) => {
    return (
        <button 
            className='CrossButton'
            onClick={onClick}
        />
    )
}

export default CrossButton
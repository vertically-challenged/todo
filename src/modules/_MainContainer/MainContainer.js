import React from 'react'
import './MainContainer.scss'

const MainContainer = (props) => {
    return (
        <div className='MainContainer'>
            {props.children}
        </div>
    )
}

export default MainContainer
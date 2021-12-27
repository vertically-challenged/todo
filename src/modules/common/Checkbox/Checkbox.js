import React from 'react'
import './Checkbox.scss'
import '../../_MainContainer/MainContainer.scss'

const Checkbox = ({completed, onChange, index}) => {
    const classesLabel = (completed) ? 'Checkbox completed' : 'Checkbox'

    return (
        <div>
            <input 
                className='visually-hidden'
                type='checkbox'
                onChange={onChange}
                id={`checkbox-${index}`}
            />
            <label 
                className={classesLabel}
                htmlFor={`checkbox-${index}`}
            />
        </div>
    )
}

export default Checkbox
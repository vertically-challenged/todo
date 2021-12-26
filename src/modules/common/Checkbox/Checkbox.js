import React from 'react'
import './Checkbox.scss'
import '../../_MainContainer/MainContainer.scss'

const Checkbox = ({completed, onChange}) => {
    const classesLabel = (completed) ? 'Checkbox completed' : 'Checkbox'

    return (
        <label className={classesLabel}>
            <input 
                className='visually-hidden'
                type='checkbox'
                onChange={onChange}
            />
        </label>
    )
}

export default Checkbox
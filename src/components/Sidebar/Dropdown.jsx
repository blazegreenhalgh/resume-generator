import React from 'react'
import { useState } from 'react'
import Field from '../FormField.jsx'
import DropdownRow from './DropdownRow'

function Dropdown({
    groupOfFields, 
    onFieldChange,

    }) {
    const [isToggled, setIsToggled] = useState(false)

    const handleClick = () => {
        setIsToggled(prev => !prev)
    }

    if (!isToggled) {
         return (
        <div className='button-wrapper relative w-full'>
        <button 
        onClick={handleClick}
        className='cursor-pointer p-4 w-full after:absolute after:inset-0'
        >
            <div className="flex flex-row justify-between w-full">
                <h2>Education</h2>
                <p>V</p>
            </div>
        </button>
        </div>
    )
    }
    return (
        <>
            <div className='button-wrapper relative w-full'>
                <button 
                onClick={handleClick}
                className='cursor-pointer p-4 w-full after:absolute after:inset-0'
                >
                    <div className="flex flex-row justify-between w-full">
                        <h2>Education</h2>
                        <p>^</p>
                    </div>
                </button>
                <DropdownRow 
                groupOfFields={groupOfFields}
                onFieldChange={onFieldChange}
                />
                <div>DROPDOWN CONTENT</div>
                <div>DROPDOWN CONTENT</div>
                <div>DROPDOWN CONTENT</div>
            </div>
              
        </>
        )
   
}

export default Dropdown




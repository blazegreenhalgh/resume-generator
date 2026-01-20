import React from 'react'
import Field from './Field'
import { useState} from 'react'

function DropdownRow({
    groupOfFields,
    onFieldChange
}) {

    const [isToggled, setIsToggled] = useState(false)

    const handleClick = () => {
        setIsToggled(prev => !prev)
    }

    function onFieldChange() {}

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
     <div className='dropdown-content px-4 pb-4'>
        <h1>toggled</h1>
         TODO: FIX onFIELDCHANGE
        {Object.keys(groupOfFields).map((key) => (
                    <Field 
                    key={key}
                    details={groupOfFields}
                    target={key}
                    label={key[0].toUpperCase() + key.slice(1)}
                    onFieldChange={onFieldChange}
                    />
                ))}
     </div>
              
    </>
        )

}

export default DropdownRow
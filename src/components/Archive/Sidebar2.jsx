import React from 'react'
import {useState} from 'react'

function Sidebar({ 
    details, 
    onFieldChange,
    education,
    onEducationChange,
    experience,
    onExperienceChange
}) {

  return (
    <div className='sidebar h-full flex flex-col w-fit p-4 gap-4'>
        <Container className="tabs flex flex-row">
                <Tab />
                <Tab label="Content" />
        </Container>
        <div className="fields flex flex-col gap-4">
            <Container className="field-group" >
                <h2>Personal Details</h2>
                {Object.keys(details).map((key) => (
                    <Field 
                    key={key}
                    details={details}
                    target={key}
                    label={key[0].toUpperCase() + key.slice(1)}
                    onFieldChange={onFieldChange}
                    />
                ))}
                <p className='bg-red-500'>Name: {details.name} </p>
            </Container >
            <Container className="field-group relative" p={false} >
                <Dropdown />
            </Container>
            <Container className="field-group" p={false} >
                <h2>Experience</h2>
            </Container>
        </div>
    </div>
  )
}

export default Sidebar


function Container({className='', p=true, children}) {
    return (
        <div className={`sidebar-container flex flex-col gap-4 bg-white rounded-xl shadow-xl ${p ? 'p-4' : ''} ${className}`}>
            {children}
        </div>
    )
}

function Field({ label='Label', details, onFieldChange, target }) {
            return (
             <div className='field flex flex-col gap-1 w-full'>
                <label className='text-xs'>{label}</label>
                <input 
                type="text"
                className='bg-gray-100 rounded-sm pl-2 py-2'
                value={details[target]}
                onChange={(e) => {onFieldChange(target, e)}}
            />
             </div>
    )
}


function Dropdown({
    education, 
    onEducationChange,
    experience,
    onExperienceChange
    }) {
    const [isToggled, setIsToggled] = useState(false)

    const handleClick = () => {
        setIsToggled(prev => !prev)
    }

    if (isToggled) {
        return (
        <>
                <button 
                onClick={handleClick}
                className='cursor-pointer p-4 after:absolute after:inset-0'
                >
                    <div className="flex flex-row justify-between w-full">
                        <h2>Education</h2>
                        <p>^</p>
                    </div>
                </button>
            
                <div className='dropdown-content px-4 pb-4'>
                    <h1>toggled</h1>
                </div>
        </>
        )
    }
    return (
        <button 
        onClick={handleClick}
        className='cursor-pointer p-4 after:absolute after:inset-0'
        >
            <div className="flex flex-row justify-between w-full">
                <h2>Education</h2>
                <p>V</p>
            </div>
        </button>
    )
}


function Tab({ label="Label" }) {
  return (
    <div className='flex flex-col  w-full items-center gap-1 bg-gray-200 p-2 rounded rounded-l'>
        <p>icon</p>
        <h2>{label}</h2>    
    </div>
  )
}



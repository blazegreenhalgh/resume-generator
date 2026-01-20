import React from 'react'
import { useState } from 'react'
import Dropdown from './Dropdown.jsx'
import Field from './Field.jsx'

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
            <Container className="field-group" p={false} >
                <Dropdown 
                groupOfFields={education} 
                onFieldChange={onEducationChange}
                />
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






function Tab({ label="Label" }) {
  return (
    <div className='flex flex-col  w-full items-center gap-1 bg-gray-200 p-2 rounded rounded-l'>
        <p>icon</p>
        <h2>{label}</h2>    
    </div>
  )
}



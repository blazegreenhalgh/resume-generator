import React from 'react'
import { useState } from 'react'
import Dropdown from '../Sidebar/Dropdown.jsx'
import Field from './FormField.jsx'
import Container from './Container'

function Sidebar({ 

}) {

  return (
    <div className='sidebar h-full flex flex-col w-fit p-4 gap-4'>
        <Container className="tabs flex flex-row">
                <Tab />
                <Tab label="Content" />
        </Container>
        <div className="fields flex flex-col gap-4">
            <Container className="field-group" >
                <h2>Personal detailsForm</h2>
                <form 
                onSubmit={(e) => e.preventDefault}
                > 
                    {Object.keys(detailsForm).map((key) => (
                        <FormField 
                        key={key}
                        form={detailsForm}
                        target={key}
                        label={key[0].toUpperCase() + key.slice(1)}
                        onFieldChange={onFieldChange}
                        />
                    ))}
                </form>
               
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









function Tab({ label="Label" }) {
  return (
    <div className='flex flex-col  w-full items-center gap-1 bg-gray-200 p-2 rounded rounded-l'>
        <p>icon</p>
        <h2>{label}</h2>    
    </div>
  )
}



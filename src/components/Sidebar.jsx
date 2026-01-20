import React from 'react'


function Sidebar({ details, onFieldChange }) {
  return (
    <div className='sidebar h-full flex flex-col w-1/2'>
        <div className="tabs flex flex-row gap-2 bg-white w-full p-2 rounded-xl">
            <Tab />
            <Tab label="Content" />
        </div>
        <div className="fields">
            <div className="field-group">
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
            </div>
        </div>
    </div>
  )
}

export default Sidebar



function Field({ label='Label', details, onFieldChange, target }) {
            return (
             <div className='field'>
                <label>{label}</label>
                <input 
                type="text"
                className='bg-white rounded-sm'
                value={details[target]}
                onChange={(e) => {onFieldChange(target, e)}}
            />
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
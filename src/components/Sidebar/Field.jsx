import React from 'react'

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

export default Field



// Form field
// Needs:
// * Value
// * on Change function (update state)
// * Label
//

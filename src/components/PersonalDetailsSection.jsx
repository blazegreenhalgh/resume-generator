import React from 'react'
import FormField from './FormField'

function PersonalDetailsSection({ personal, updateResume }) {
  return (
    <>
    <h2>Personal Details</h2>
    {Object.keys(personal).map((item) => (
        <FormField 
            key={item}
            label={item}
            value={personal[item]}
            objectKey={item}
            path="personal"
            onFieldChange={updateResume}
        />
    ))}
  </>
  )
}

export default PersonalDetailsSection
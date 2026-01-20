import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'



function App() {
  const [details, setDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  })
  const [education, setEducation] = useState({})
  const [experience, setExperience] = useState({})

  const handleFieldChange = (target, e) =>{
    setDetails({...details, [target]: e.target.value})
    console.log(details)
  }

  const handleExperienceChange = () => {}

  const handleEducationChange = () => {}

  return (
    <>
     <h1 className='bg-red-500'>hello</h1>
     <Sidebar 
     details={details} 
     onFieldChange={handleFieldChange} 
     education={education}
     onEducationChange={handleEducationChange}
     experience={experience}
     onExperienceChange={handleExperienceChange}


     />
    </>
  )
}

export default App

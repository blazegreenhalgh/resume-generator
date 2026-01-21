import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Container from './components/Container'
import PersonalDetailsSection from './components/PersonalDetailsSection'



function App() {
  const [resume, setResume] = useState({
    personal: { 
      fullName: '',
      email: '', 
      phone: '', 
      address: '' 
    },
    experience: [ 
      { 
        id: '', 
        company: '', 
        position: '', 
        startDate: '', 
        endDate: '', 
        location: '', 
        description: ''
      } 
    ],
    education: [ 
      { 
        id: '', 
        school: '', 
        degree: '', 
        startDate: '', 
        endDate: '' 
      } 
    ]
  })

  const updateResume = (path, objectKey, value) => {
    setResume(prev => ({...prev, [path]: {...prev[path], [objectKey]: value}}))
    
    console.log(resume)
  }



  return (
    <>
     <h1 className='bg-red-500'>hello</h1>
     <div className="sidebar">
      <Container>
        <PersonalDetailsSection personal={resume.personal} updateResume={updateResume}/>
      </Container>
     </div>
    </>
  )
}

export default App

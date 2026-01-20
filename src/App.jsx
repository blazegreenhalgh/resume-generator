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

  const handleFieldChange = (target, e) =>{
    setDetails({...details, [target]: e.target.value})
    console.log(details)
  }

  return (
    <>
     <h1 className='bg-red-500'>hello</h1>
     <Sidebar details={details} onFieldChange={handleFieldChange} />
    </>
  )
}

export default App

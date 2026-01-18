import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'



function App() {
  const [personalDetails, setPersonalDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  })

  return (
    <>
     <h1 className='bg-red-500'>hello</h1>
     <Sidebar personalDetails={personalDetails} />
    </>
  )
}

export default App

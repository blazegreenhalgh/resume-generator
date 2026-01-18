import React from 'react'


function Sidebar({ personalDetails }) {
  return (
    <div className='sidebar h-full flex flex-col w-1/2'>
        <div className="sidebar-tabs flex flex-row gap-2 bg-white w-full p-2 rounded-xl">
            <SidebarTab />
            <SidebarTab />
        </div>
        <div className="sidebar-fields">

        </div>
    </div>
  )
}

export default Sidebar



function Field({label='label'}) {
    return (
        <div className='field'>
            <label>{label}</label>
            <input 
            type="text"
            value={value}
            onChange={() => {}}
            />
        </div>
    )
}


function SidebarTab({ label="Label" }) {
  return (
    <div className='flex flex-col  w-full items-center gap-1 bg-gray-200 p-2 rounded rounded-l'>
        <p>icon</p>
        <h2>{label}</h2>    
    </div>
  )
}
import React from 'react'

function Container({className='', padding=true, children}) {
    return (
        <div className={`sidebar-container flex flex-col gap-4 bg-white rounded-xl shadow-xl w-fit ${padding ? 'p-4' : ''} ${className}`}>
            {children}
        </div>
    )
}

export default Container
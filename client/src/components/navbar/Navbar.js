import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <>
    <div className='flex  bg-black flex-row justify-between h-12'>
        <div className=' align-center mx-4 p-2'><h4 className='text-white logo'> Stock Search</h4></div>
        <div className='bg-red-600'></div>

    </div>
    </>
  )
}

export default Navbar
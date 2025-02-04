import React from 'react'

const Header = () => {
  return (
    <div className='bg-purple-300 h-screen' >
      <ul className='flex flex-col justify-center py-22 items-center text-2xl font-bold gap-y-9 '>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact Us</li>
      </ul>
    </div>
  )
}

export default Header

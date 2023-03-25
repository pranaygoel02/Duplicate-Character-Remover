import React from 'react'
import Party from '../assets/party.gif'

function Popper() {
  return (
    <div className='absolute inset-0 w-full h-full object-contain grid grid-cols-4 mix-blend-darken animate-up'>
    <img className='w-full h-full' src={Party} alt="loading..." />
    <img className='w-full h-full' src={Party} alt="loading..." />
    <img className='w-full h-full' src={Party} alt="loading..." />
    <img className='w-full h-full' src={Party} alt="loading..." />
    <img className='w-full h-full' src={Party} alt="loading..." />
    <img className='w-full h-full' src={Party} alt="loading..." />
    <img className='w-full h-full' src={Party} alt="loading..." />
    <img className='w-full h-full' src={Party} alt="loading..." />
  </div>
  )
}

export default Popper
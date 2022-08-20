import React from 'react'

const BoxUI = ({ headerText, value }) => {
  return (
    <div className='flex justify-center items-center text-center'>
      <div className='text-xl font-semibold'>
        <p>{headerText}</p>
        <p className='text-5xl'>{value}</p>
      </div>
    </div>
  )
}

export default BoxUI

import React from 'react'

function FirstName({errors, touched, handleChange, handleBlur}) {
  return (
    <div className="mt-3 w-full">
        <label htmlFor="firstName" className='block '>First Name</label>
        <input type="text" placeholder="Enter First Name" name="firstName"
        onChange={handleChange('firstName')}
        onBlur={handleBlur('firstName')}
        className='mt-1 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-800'
        />
    </div>
  )
}

export default FirstName
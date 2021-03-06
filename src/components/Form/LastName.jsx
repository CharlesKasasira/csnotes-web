import React from 'react'

export default function LastName({errors, touched, handleChange, handleBlur}) {
  return (
    <div className="mt-3 w-full">
        <label htmlFor="lastName" className='block '>Last Name</label>
        <input type="text" placeholder="Enter Last Name" name="lastName"
        onChange={handleChange('lastName')}
        onBlur={handleBlur('lastName')}
        className='mt-1 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-800'
        />
        <div className={`${(errors?.lastName  && touched?.LastName) ? "block" : 'hidev'}`} >
          <label className={`${(errors?.lastName && touched?.lastName) ? "text-red-500 text-sm" : 'text-transparent text-sm'}`}>
            {`${(errors?.lastName  && touched?.lastName) ? errors.lastName : ''}`}
          </label>
        </div>
    </div>
  )
}
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
        <div className={`${(errors?.firstName  && touched?.firstName) ? "block" : 'hidev'}`} >
          <label className={`${(errors?.firstName && touched?.firstName) ? "text-red-500 text-sm" : 'text-transparent text-sm'}`}>
            {`${(errors?.firstName  && touched?.firstName) ? errors.firstName : ''}`}
          </label>
        </div>
    </div>
  )
}

export default FirstName
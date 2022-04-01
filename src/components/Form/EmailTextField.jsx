import React from 'react'

function EmailTextField({ errors, touched, handleChange, handleBlur}) {
  return (
    <div className="mt-3 w-full">
        <label htmlFor="email" className='block '>Email</label>
        <input type="email" placeholder="Enter email" name="email"
        onChange={handleChange('email')}
        onBlur={handleBlur('email')}
        className='mt-1 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-800'
        />
        <div className={`${(errors?.email  && touched?.email) ? "block" : 'hidev'}`} ><label className={`${(errors?.email && touched?.email) ? "text-red-500 text-sm" : 'text-transparent text-sm'}`}>{`${(errors?.email  && touched?.email) ? errors.email : 'hide'}`}</label>
        </div>
    </div>
  )
}

export default EmailTextField
import React from 'react'

export default function PasswordTextField({ errors, touched, handleChange, handleBlur}) {
  return (
    <div className="mt-3 w-full">
        <label htmlFor="password" className='block'>Password</label>
        <input type="password" placeholder="Enter password" name="password"
        onChange={handleChange('password')}
        onBlur={handleBlur('password')}
        className='mt-1 sm:mt-0 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-800'
        />
        <div className={`${(errors?.password  && touched?.password) ? "block" : 'hidev'}`} ><label className={`${(errors?.password && touched?.password) ? "text-red-500 text-sm" : 'text-transparent text-sm'}`}>{`${(errors?.password  && touched?.password) ? errors.password : 'hide'}`}</label>
        </div>
    </div>
  )
}
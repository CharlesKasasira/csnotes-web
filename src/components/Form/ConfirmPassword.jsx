import React from 'react'

export default function ConfirmPassword({ error, handleChange, handleBlur}) {
  return (
    <div className="mt-3 w-full mb-3">
        <label htmlFor="confirmPassword" className='block'>Confirm Password</label>
        <input type="password" placeholder="Confirm password" name="confirmPassword"
        onChange={handleChange('confirmPassword')}
        onBlur={handleBlur('confirmPassword')}
        className='mt-1 sm:mt-0 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-800'
        />
        
        <div>
          <label className="text-red-500 text-sm">{error ? 'hey' : ''}</label>
        </div>
    </div>
  )
}
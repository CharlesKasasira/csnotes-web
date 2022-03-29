import React from 'react'
import { Link } from 'react-router-dom'

import { courseUnit } from '../helpers/courseUnits'

function Course() {
  return (
    <div className='bg-white w-full h-full p-4 shadow-md rounded-md'>
      <h3 className='font-bold'>Choose Course Unit</h3>

      {courseUnit.map(unit => (
        <div className='course-unit'>
          <Link to={`${unit.link}/summary`}>
            <span className='text-gray-500'>{unit.code}</span>
            <h5>{unit.name}</h5>
          </Link>
        </div>
      ))}
    </div>

  )
}

export default Course
import React from 'react'
import { Link } from 'react-router-dom'

import { courseUnit } from '../helpers/courseUnits'

function PastPapers() {
  return (
    <>
      <h3>Choose Course Unit</h3>

      {courseUnit.map(unit => (
        <div className='course-unit'>
          <Link to={unit.link}>
            <span>{unit.code}</span>
            <h5>{unit.name}</h5>
          </Link>
        </div>
      ))}
    </>

  )
}

export default PastPapers
import '../styles/dashboard.css'

import { courseUnit } from '../helpers/courseUnits'

import { useOutletContext } from 'react-router-dom'
import { titleCase } from '../helpers/utillities'


function Dashboard() {
  const { meta } = useOutletContext()

  return (
    <>
    <div>Welcome {titleCase(meta.firstName)}</div>

    <div className='status'>
      {courseUnit.map(unit => (
        <div className='status-item'>
        <span>{unit.code}</span>
        <h4>{unit.name}</h4>

      </div>
      ))}
    </div>

    <div className='graph'>
      The Graph goes times.
    </div>
    </>
  )
}

export default Dashboard
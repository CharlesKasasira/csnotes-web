import '../styles/dashboard.css'

import { courseUnit } from '../helpers/courseUnits'

function Dashboard() {
  return (
    <>
    <div>Welcome Charles</div>

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
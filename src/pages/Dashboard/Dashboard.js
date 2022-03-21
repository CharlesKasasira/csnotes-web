import { courseUnit } from '../../helpers/courseUnits'

import { useOutletContext } from 'react-router-dom'
import { titleCase } from '../../helpers/utillities'

import CourseCard from '../../components/CourseCard/CourseCard'

import './style.css'

function Dashboard() {
  const { meta } = useOutletContext()

  return (
    <>
    <div>Welcome {titleCase(meta.firstName)}</div>

    <div className='status'>
      {courseUnit.map(unit => (
        <CourseCard code={unit.code} name={unit.name}/>
      ))}
    </div>

    <div className='graph'>
      The Graph goes times.
    </div>
    </>
  )
}

export default Dashboard
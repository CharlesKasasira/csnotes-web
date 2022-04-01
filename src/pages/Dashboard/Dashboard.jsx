import { courseUnit } from '../../helpers/courseUnits'
import { useOutletContext } from 'react-router-dom'
import { titleCase } from '../../helpers/utillities'
import CourseCard from '../../components/CourseCard/CourseCard'
import { TimeTable } from '../../components'
import { useEffect } from 'react'

import './style.css'

function Dashboard() {
  const { meta } = useOutletContext()


  useEffect(() => {
    document.title = 'Dashboard - Student\'s app'
  })

  return (
    <>
    <div className='uppercase font-bold'>Welcome {titleCase(meta.firstName)},</div>

    <div className='status'>
      {courseUnit.map(unit => (
        <CourseCard code={unit.code} name={unit.name} link={unit.link}/>
      ))}
    </div>

      <TimeTable />
    </>
  )
}

export default Dashboard
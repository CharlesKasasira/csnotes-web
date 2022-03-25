import { courseUnit } from '../../helpers/courseUnits'
import { useOutletContext } from 'react-router-dom'
import { titleCase } from '../../helpers/utillities'
import CourseCard from '../../components/CourseCard/CourseCard'
import { TimeTable, Forum } from '../../components'

import './style.css'

function Dashboard() {
  const { meta } = useOutletContext()

  return (
    <>
    <div className='uppercase font-bold'>Welcome {titleCase(meta.firstName)},</div>

    <div className='status'>
      {courseUnit.map(unit => (
        <CourseCard code={unit.code} name={unit.name} link={unit.link}/>
      ))}
    </div>

    <div className='graph'>
      {/* <Forum /> */}
      <TimeTable />
    </div>
    </>
  )
}

export default Dashboard
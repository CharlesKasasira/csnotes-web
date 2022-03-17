import '../styles/dashboard.css'

function Dashboard() {
  return (
    <>
    <div>Welcome to the Dashboard</div>

    <div className='status'>
      <div className='status-item'>
        <span>CSC 1100</span>
        <h4>Digital Innovation And Computational Thinking</h4>

      </div>
      <div className='status-item'>
        <span>CSC 1100</span>
        <h4>Computer Literacy</h4>
      </div>
      <div className='status-item'>
        <span>CSC 1100</span>
        <h4>Computer Architecture And Organisation</h4>
      </div>
      <div className='status-item'>
        <span>CSC 1100</span>
        <h4>Mathematics for Computer Science</h4>
      </div>
      <div className='status-item'>
        <span>CSC 1100</span>
        <h4>Structure and Object-Oriented Programming</h4>
      </div>
    </div>
    </>
  )
}

export default Dashboard
import './style.css'

export default function TimeTable() {

  return (
    <div className="bg-white w-full shadow-md p-3 rounded-md">
      <h3 className="">Time Table</h3>
      <table className='table table-auto'>
        <thead className='table-header-group'>
          <tr>
            <th>Time</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th><th>Sun</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>9pm -11:00pm</td><td></td><td></td><td></td><td></td><td></td><td>Structured & OOP</td><td></td>
          </tr>
          <tr>
            <td>3pm -5:00pm</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
          </tr>
          <tr>
            <td>3pm -5:00pm</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
          </tr>
          <tr>
            <td>3pm -5:00pm</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
          </tr>
          <tr>
            <td>3pm -5:00pm</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
          </tr>
          <tr>
            <td>5pm -7:00pm</td><td>Computer Literacy</td><td>Digital Innovation & Computational Thinking</td><td>Computer Organisation & Architecture</td><td>Digital Innovation & Computational Thinking</td><td>Structured and OOP</td><td></td><td></td>
          </tr>
          <tr>
            <td>7pm -9:00pm</td><td>Computer Literacy</td><td>Maths for Computer Science</td><td>Computer Organisation & Architecture</td><td>Digital Innovation & Architecture</td><td>Structured and OOP</td><td></td><td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

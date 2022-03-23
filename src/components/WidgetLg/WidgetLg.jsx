import './style.css'

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Time Table</h3>
      <table className='table table-striped table-responsive table-hover'>
        <thead>
          <tr>
            <th>Time</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th><th>Sun</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>3pm -5:00pm</th><td></td><td>Tue</td><td>Wed</td><td>thu</td><td>Fri</td><td>Sat</td><td>Sun</td>
          </tr>
          <tr>
            <th>3pm -5:00pm</th><td></td><td>Tue</td><td>Wed</td><td>thu</td><td>Fri</td><td>Sat</td><td>Sun</td>
          </tr>
          <tr>
            <th>3pm -5:00pm</th><td></td><td>Tue</td><td>Wed</td><td>thu</td><td>Fri</td><td>Sat</td><td>Sun</td>
          </tr>
          <tr>
            <th>3pm -5:00pm</th><td></td><td>Tue</td><td>Wed</td><td>thu</td><td>Fri</td><td>Sat</td><td>Sun</td>
          </tr>
          <tr>
            <th>5:00pm - 7:00pm</th><td>Computer Literacy</td><td>Tue</td><td>COA</td><td>thu</td><td>Structured and OOP</td><td>Sat</td><td>Sun</td>
          </tr>
          <tr>
            <th>7:00pm - 9:00pm</th><td>Computer Literacy</td><td>Tue</td><td>Wed</td><td>thu</td><td>Fri</td><td>Sat</td><td>Sun</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

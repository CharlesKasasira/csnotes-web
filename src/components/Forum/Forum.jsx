import "./Forum.css";
import { BsFillEyeFill } from 'react-icons/bs'

export default function Forum() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Forums</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">CS-EVE Solution Desk</span>
            <span className="">15 members</span>
          </div>
          <button className="widgetSmButton">
            <BsFillEyeFill />
          </button>
        </li>
      </ul>
    </div>
  );
}

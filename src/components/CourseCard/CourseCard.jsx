import "./style.css";
import { useNavigate } from "react-router-dom";

export default function CourseCard({code, name, link}) {
  const navigate = useNavigate()
  return (
      <div 
        className="featuredItem bg-white"
        onClick={() => navigate(`${link}/summary`, { replace: false})}
      >
        <span className="bg-gray-800 text-white px-3 py-1 my-1 rounded-lg">{code}</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{name}</span>
        </div>
      </div>
  );
}

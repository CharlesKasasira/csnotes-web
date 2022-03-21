import "./style.css";

export default function CourseCard({code, name}) {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">{code}</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{name}</span>
          <span className="featuredMoneyRate">
          </span>
        </div>
      </div>
    </div>
  );
}

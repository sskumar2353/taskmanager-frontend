import "../../styles/statscard.css";

const StatsCard = ({ title, count }) => {
  return (
    <div className="stats-card">
      <h3>{title}</h3>
      <h1>{count}</h1>
    </div>
  );
};

export default StatsCard;
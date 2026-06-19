import "../../styles/badges.css";

const StatusBadge = ({ status }) => {

  let badgeClass = "";

  if (status === "Pending") {
    badgeClass = "pending-status";
  }

  else if (status === "In Progress") {
    badgeClass = "progress-status";
  }

  else {
    badgeClass = "completed-status";
  }

  return (
    <span className={badgeClass}>
      {status}
    </span>
  );
};

export default StatusBadge;
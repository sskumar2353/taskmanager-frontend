import "../../styles/badges.css";

const PriorityBadge = ({ priority }) => {

  let badgeClass = "";

  if (priority === "High") {
    badgeClass = "high-priority";
  }

  else if (priority === "Medium") {
    badgeClass = "medium-priority";
  }

  else {
    badgeClass = "low-priority";
  }

  return (
    <span className={badgeClass}>
      {priority}
    </span>
  );
};

export default PriorityBadge;
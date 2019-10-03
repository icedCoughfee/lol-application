import React from "react";

const ProgressBar = props => {
  const { completionPct } = props;
  const classes = isComplete(completionPct) ? "bg-success" : "bg-warning";
  const label = isComplete(completionPct) ? "Complete" : `${completionPct}%`;
  return (
    <div className="progress">
      <div
        className={`progress-bar ${classes}`}
        role="progressbar"
        style={{ width: `${completionPct}%` }}
        aria-valuenow={completionPct}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {label}
      </div>
    </div>
  );

  function isComplete(completionPct) {
    return completionPct === 100;
  }
};

export default ProgressBar;

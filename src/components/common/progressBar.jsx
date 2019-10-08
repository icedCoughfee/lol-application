import React from "react";

const ProgressBar = props => {
  const { label, completionPct } = props;
  const classes = isComplete(completionPct) ? "bg-success" : "bg-warning";
  const btnLabel = isComplete(completionPct)
    ? label
      ? label
      : "Complete"
    : `${completionPct}%`;
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
        <span className="progress-bar-label">{btnLabel}</span>
      </div>
    </div>
  );

  function isComplete(completionPct) {
    return completionPct === 100;
  }
};

export default ProgressBar;

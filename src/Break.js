import React from "react";

function Break({
  minutesToDuration,
  breakDuration,
  handleAddBreak,
  handleSubtractBreak,
  isTimerRunning,
}) {
  return (
    <>
      <span className="input-group-text" data-testid="duration-break">
        Break Duration: {minutesToDuration(breakDuration)}
      </span>
      <div className="input-group-append">
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="decrease-break"
          onClick={handleSubtractBreak}
          disabled={isTimerRunning}
        >
          <span className="oi oi-minus" />
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="increase-break"
          onClick={handleAddBreak}
          disabled={isTimerRunning}
        >
          <span className="oi oi-plus" />
        </button>
      </div>
    </>
  );
}
export default Break;

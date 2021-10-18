import React from "react";

function Focus({
  minutesToDuration,
  focusDuration,
  handleAddFocus,
  handleSubtractFocus,
  isTimerRunning,
}) {
  return (
    <div>
      <span className="input-group-text" data-testid="duration-focus">
        Focus Duration: {minutesToDuration(focusDuration)}
      </span>
      <div className="input-group-append">
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="decrease-focus"
          onClick={handleSubtractFocus}
          disabled={isTimerRunning}
        >
          <span className="oi oi-minus" />
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="increase-focus"
          onClick={handleAddFocus}
          disabled={isTimerRunning}
        >
          <span className="oi oi-plus" />
        </button>
      </div>
    </div>
  );
}
//
export default Focus;

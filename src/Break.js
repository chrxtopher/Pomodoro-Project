import React from "react";

function Break({
  minutesToDuration,
  breakDuration,
  handleAddBreak,
  handleSubtractBreak,
}) {
  return (
    <>
      <span className="input-group-text" data-testid="duration-break">
        {/* TODO: Update this text to display the current break session duration */}
        Break Duration: {minutesToDuration(breakDuration)}
      </span>
      <div className="input-group-append">
        {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="decrease-break"
          onClick={handleSubtractBreak}
        >
          <span className="oi oi-minus" />
        </button>
        {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="increase-break"
          onClick={handleAddBreak}
        >
          <span className="oi oi-plus" />
        </button>
      </div>
    </>
  );
}
export default Break;

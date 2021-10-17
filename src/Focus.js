import React from "react";

function Focus({
  minutesToDuration,
  focusDuration,
  handleAddFocus,
  handleSubtractFocus,
}) {
  return (
    <>
      <span className="input-group-text" data-testid="duration-focus">
        Focus Duration: {minutesToDuration(focusDuration)}
      </span>
      <div className="input-group-append">
        {/* TODO:disable during a focus or break session */}
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="decrease-focus"
          onClick={handleSubtractFocus}
        >
          <span className="oi oi-minus" />
        </button>
        {/* TODO:disable during a focus or break session */}
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="increase-focus"
          onClick={handleAddFocus}
        >
          <span className="oi oi-plus" />
        </button>
      </div>
    </>
  );
}
//
export default Focus;

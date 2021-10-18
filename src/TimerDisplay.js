import React from "react";

function TimerDisplay({
  session,
  minutesToDuration,
  secondsToDuration,
  focusDuration,
  breakDuration,
}) {
  return (
    /* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */
    <div>
      {session && (
        <>
          <div className="row mb-2">
            <div className="col">
              <h2 data-testid="session-title">
                {session?.label} for{" "}
                {session?.label === "Focusing"
                  ? minutesToDuration(focusDuration)
                  : minutesToDuration(breakDuration)}
              </h2>
              <p className="lead" data-testid="session-sub-title">
                {secondsToDuration(session?.timeRemaining)} remaining
              </p>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col">
              <div className="progress" style={{ height: "20px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow="0" // TODO: Increase aria-valuenow as elapsed time increases
                  style={{ width: "0%" }} // TODO: Increase width % as elapsed time increases
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default TimerDisplay;

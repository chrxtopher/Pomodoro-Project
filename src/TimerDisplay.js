import React from "react";

function TimerDisplay({
  session,
  minutesToDuration,
  secondsToDuration,
  focusDuration,
  breakDuration,
  timerBar,
}) {
  return (
    <div>
      {session && (
        <div>
          <div className="row mb-2">
            <div className="col">
              <h2 data-testid="session-title">
                {session.label} for{" "}
                {session.label === "Focusing"
                  ? minutesToDuration(focusDuration)
                  : minutesToDuration(breakDuration)}{" "}
                minutes
              </h2>
              <p className="lead" data-testid="session-sub-title">
                {secondsToDuration(session.timeRemaining)} remaining
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
                  aria-valuenow={timerBar}
                  style={{ width: `${timerBar}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TimerDisplay;

import React, { useState, useEffect } from 'react';
import { bool, func } from 'prop-types';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import CircularProgress from '../CircularProgress/CircularProgress';
import './Timer.css';

const Timer = ({ toggleTimer, timerIsOn }) => {
  const [countDownFrom, setCountDownFrom] = useState(30);
  const [secondsRemaining, setSecondsRemaining] = useState(countDownFrom);
  useEffect(() => {
    if (secondsRemaining > 0) {
      const interval = setInterval(() => {
        setSecondsRemaining(secondsRemaining - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [secondsRemaining]);
  return (
    <div style={{ display: 'flex' }}>
      <CircularProgress
        radius={60}
        stroke={2}
        progress={Math.abs(secondsRemaining - countDownFrom)}
        total={countDownFrom}
      />

      {secondsRemaining}
      <ToggleSwitch toggleTimer={toggleTimer} timerIsOn={timerIsOn} />
      {/* <div className="timer-tooltip">Click the switch to use the timer</div> */}
    </div>
  );
};

Timer.propTypes = {
  timerIsOn: bool.isRequired,
  toggleTimer: func.isRequired,
};

export default Timer;

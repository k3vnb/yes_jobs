import React, { useState, useEffect } from 'react';
import { bool, func } from 'prop-types';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import './Timer.css';

const Timer = ({ toggleTimer, timerIsOn }) => {
  const [countDownFrom, setCountDownFrom] = useState(60);
  useEffect(() => {
    if (countDownFrom > 0) {
      const interval = setInterval(() => {
        setCountDownFrom(countDownFrom - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [countDownFrom]);
  return (
    <div style={{ display: 'flex' }}>
      <div>60 |</div>
      <div>| 120 |</div>
      <div>| 180</div>
      {countDownFrom}
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

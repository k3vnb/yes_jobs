import React, { useState, useEffect } from 'react';
import { number } from 'prop-types';
import CircularProgress from '../CircularProgress/CircularProgress';
import './Timer.css';

const Timer = ({ currentQuestionNumber }) => {
  const [countDownFrom, setCountDownFrom] = useState(0);
  const [secondsRemaining, setSecondsRemaining] = useState(0);
  useEffect(() => {
    if (secondsRemaining > 0) {
      const interval = setInterval(() => {
        setSecondsRemaining(secondsRemaining - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [secondsRemaining]);
  useEffect(() => {
    setSecondsRemaining(countDownFrom);
  }, [currentQuestionNumber, countDownFrom]);

  const handleCheckbox = (e) => {
    setCountDownFrom(Number(e.target.value));
    setSecondsRemaining(Number(e.target.value));
  };
  const formValues = [0, 60, 120];
  const formFields = formValues.map((val) => (
    <label key={val} htmlFor={`${val}`}>
      <input
        type="radio"
        name={`${val}`}
        value={val}
        checked={countDownFrom === val}
        onChange={handleCheckbox}
      />
      {!val ? 'Timer Off' : `${val}s`}
    </label>
  ));
  return (
    <div style={{ display: 'flex' }}>
      <div className="clock-container">
        <CircularProgress
          radius={60}
          stroke={23}
          progress={Math.abs(secondsRemaining - countDownFrom)}
          total={countDownFrom}
        />
      </div>
      <form className="select-timer-form">{formFields}</form>
    </div>
  );
};

Timer.propTypes = {
  currentQuestionNumber: number.isRequired,
};

export default Timer;

import React, { useState, useEffect } from 'react';
import { shape, string } from 'prop-types';
import CircularProgress from '../CircularProgress/CircularProgress';
import RefreshIcon from '../RefreshIcon/RefreshIcon';
import './Timer.css';

const Timer = ({ currentQuestion }) => {
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
  }, [currentQuestion, countDownFrom]);

  const refreshTimer = () => setSecondsRemaining(countDownFrom);

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
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleCheckbox(e);
        }}
      />
      {!val ? ' Timer Off' : ` ${val}s`}
    </label>
  ));
  return (
    <div className="timer-container">
      <div
        className={
          countDownFrom
            ? 'clock-container clock-container--active'
            : 'clock-container'
        }
      >
        <CircularProgress
          radius={60}
          stroke={23}
          progress={Math.abs(secondsRemaining - countDownFrom)}
          total={countDownFrom}
        />
      </div>
      <form role="timer" className="select-timer-form">
        <>
          {formFields}
          <RefreshIcon
            action={refreshTimer}
            disabled={Boolean(!countDownFrom)}
          />
        </>
      </form>
    </div>
  );
};

Timer.propTypes = {
  currentQuestion: shape({
    id: string,
    question: string,
    answer: string,
    type: string,
  }),
};

Timer.defaultProps = {
  currentQuestion: { id: '', question: '', answer: '', type: '' },
};

export default Timer;

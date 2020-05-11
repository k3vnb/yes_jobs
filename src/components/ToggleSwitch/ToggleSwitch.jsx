import React from 'react';
import { bool, func } from 'prop-types';
import './ToggleSwitch.css';

const ToggleSwitch = ({ timerIsOn, toggleTimer }) => (
  <label
    className={timerIsOn ? 'switch-label selected' : 'switch-label'}
    htmlFor="switch"
  >
    <input
      className="switch-checkbox"
      id="switch"
      type="checkbox"
      onChange={toggleTimer}
    />
    <span className="switch-button" />
  </label>
);

ToggleSwitch.propTypes = {
  timerIsOn: bool.isRequired,
  toggleTimer: func.isRequired,
};

export default ToggleSwitch;

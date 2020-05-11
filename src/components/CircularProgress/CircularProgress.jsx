import React from 'react';
import { number } from 'prop-types';
import './CircularProgress.css';

const CircularProgress = ({ radius, stroke, progress, total }) => {
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / total) * circumference;
  const transition = `stroke-dashoffset 1s linear`;
  return (
    <svg className="progress-ring" width={radius * 2} height={radius * 2}>
      <circle
        className="progress-ring__circle"
        stroke={`rgb(${40 + 255 * (progress / total)}, ${
          100 - 255 * (progress / total)
        }, ${255 - 255 * (progress / total)})`}
        strokeWidth={stroke}
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset, transition }}
        fill="transparent"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
};

CircularProgress.propTypes = {
  radius: number.isRequired,
  stroke: number.isRequired,
  progress: number.isRequired,
  total: number.isRequired,
};

export default CircularProgress;

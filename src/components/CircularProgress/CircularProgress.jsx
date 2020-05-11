import React from 'react';
import { number } from 'prop-types';
import './CircularProgress.css';

const CircularProgress = ({ radius, stroke, progress, total }) => {
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / total) * circumference;
  const transition = !!progress && `stroke-dashoffset 1s linear`;
  return (
    <svg className="progress-ring" width={radius} height={radius}>
      <g>
        {total && (
          <circle
            className="progress-ring__circle"
            stroke={`rgb(${20 + 255 * (progress / total)}, ${
              100 - 255 * (progress / total)
            }, ${255 - 255 * (progress / total)})`}
            strokeWidth={stroke}
            strokeOpacity={0.85}
            strokeDasharray={`${circumference} ${circumference}`}
            style={{ strokeDashoffset, transition }}
            fill="transparent"
            r={normalizedRadius}
            cx={radius / 2}
            cy={radius / 2}
          />
        )}
        <circle
          className="progress-ring__circle"
          stroke="black"
          strokeWidth={stroke}
          strokeOpacity={0.15}
          fill="transparent"
          r={normalizedRadius}
          cx={radius / 2}
          cy={radius / 2}
        />
      </g>
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

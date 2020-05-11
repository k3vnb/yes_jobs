import React from 'react';
import { func } from 'prop-types';

const RefreshIcon = ({ action }) => {
  return (
    <button
      type="button"
      className="refresh-button button-reset"
      title="refresh timer"
      onClick={action}
    >
      <svg
        width="30"
        height="28"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsSvg="http://www.w3.org/2000/svg"
      >
        <g>
          <title>Layer 1</title>
          <g id="Layer_3_copy_2">
            <g fill="#555753" id="svg_1" />
          </g>
          <g stroke="null" id="svg_4" />
          <g stroke="null" id="svg_5">
            <path
              fill="black"
              d="m15,3.8816c-2.162,0 -4.1776,0.6308 -5.8796,1.7128l-2.3,-2.3l0,6.444l6.444,0l-2.558,-2.558c1.272,-0.7148 2.7336,-1.128 4.2936,-1.128c4.8684,0 8.8292,3.9608 8.8292,8.8296c0,1.1596 -0.2308,2.2656 -0.6396,3.2808l1.8952,1.1048c0.588,-1.3452 0.9152,-2.8272 0.9152,-4.3856c0,-6.0656 -4.9348,-11.0004 -11,-11.0004z"
              id="svg_2"
            />
            <path
              stroke="null"
              d="m19.2908,22.5804c-1.2716,0.7144 -2.7304,1.1308 -4.2904,1.1308c-4.8684,0 -8.8292,-3.9608 -8.8292,-8.8292c0,-1.0956 0.2096,-2.14 0.5756,-3.1084l-1.8924,-1.1404c-0.55,1.3084 -0.8544,2.7432 -0.8544,4.2488c0,6.0656 4.9344,11 11,11c2.1624,0 4.1736,-0.6336 5.8764,-1.7156l2.3032,2.3036l0,-6.4448l-6.4444,0l2.5556,2.5552z"
              id="svg_3"
            />
          </g>
        </g>
      </svg>
    </button>
  );
};

RefreshIcon.propTypes = {
  action: func.isRequired,
};

export default RefreshIcon;

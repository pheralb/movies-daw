import React from "react";

const xDoodle = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 519 519"
    >
      <defs>
        <radialGradient
          id="radialGradient-1"
          cx="50%"
          cy="18.4%"
          r="59.676%"
          fx="50%"
          fy="18.4%"
          gradientTransform="scale(-.99808 -1) rotate(-87.684 -.192 .521)"
        >
          <stop offset="0%" stopColor="#FDE990"></stop>
          <stop offset="100%" stopColor="#FACE57"></stop>
        </radialGradient>
        <radialGradient
          id="radialGradient-2"
          cx="50%"
          cy="44.771%"
          r="49.968%"
          fx="50%"
          fy="44.771%"
          gradientTransform="matrix(.01955 -.9998 1.02082 .02004 .033 .939)"
        >
          <stop offset="0%" stopColor="#D27C12" stopOpacity="0.186"></stop>
          <stop offset="85.631%" stopColor="#D27C12" stopOpacity="0"></stop>
          <stop offset="100%" stopColor="#D27C12" stopOpacity="0.325"></stop>
        </radialGradient>
        <linearGradient
          id="linearGradient-3"
          x1="54.019%"
          x2="45.981%"
          y1=".373%"
          y2="99.627%"
        >
          <stop offset="0%" stopColor="#251C0C"></stop>
          <stop offset="100%"></stop>
        </linearGradient>
        <radialGradient
          id="radialGradient-4"
          cx="50%"
          cy="50%"
          r="92.537%"
          fx="50%"
          fy="50%"
          gradientTransform="matrix(0 .54032 -1 0 1 .23)"
        >
          <stop offset="0%" stopColor="#71B5F8"></stop>
          <stop offset="100%" stopColor="#0073E4"></stop>
        </radialGradient>
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-1563 -1625)">
          <g transform="translate(1563 1625)">
            <ellipse
              cx="259.501"
              cy="259.002"
              fill="url(#radialGradient-1)"
              rx="259.501"
              ry="259.002"
            ></ellipse>
            <ellipse
              cx="259.501"
              cy="259.003"
              fill="url(#radialGradient-2)"
              rx="259.501"
              ry="259.002"
            ></ellipse>
            <path
              fill="url(#linearGradient-3)"
              d="M154.467 245.347c15.692-2.561 31.76 9.523 34.215 31.143 2.455 21.62-9.633 44.588-25.325 47.15-15.692 2.56-35.145-8.614-37.6-30.234-2.454-21.62 13.018-45.498 28.71-48.059zM157.21 182c6.577 0 11.909 5.35 11.909 11.948 0 6.599-5.332 11.948-11.909 11.948-14.14 0-28.665 5.954-43.764 18.333-5.093 4.176-12.595 3.418-16.757-1.691-4.162-5.11-3.407-12.637 1.686-16.812 19.1-15.66 38.776-23.726 58.835-23.726z"
              opacity="0.88"
            ></path>
            <path
              fill="url(#linearGradient-3)"
              d="M395.467 245.347c15.692-2.561 31.76 9.523 34.215 31.143 2.455 21.62-9.633 44.588-25.325 47.15-15.692 2.56-35.145-8.614-37.6-30.234-2.454-21.62 13.018-45.498 28.71-48.059zM398.21 182c6.577 0 11.909 5.35 11.909 11.948 0 6.599-5.332 11.948-11.909 11.948-14.14 0-28.665 5.954-43.764 18.333-5.093 4.176-12.595 3.418-16.757-1.691-4.162-5.11-3.407-12.637 1.686-16.812 19.1-15.66 38.776-23.726 58.835-23.726z"
              opacity="0.88"
              transform="matrix(-1 0 0 1 765 0)"
            ></path>
            <path
              fill="#251C0C"
              fillRule="nonzero"
              d="M261.862 370c29.018 0 55.447 15.168 70.35 39.524 3.492 5.708 1.713 13.176-3.975 16.681-5.63 3.47-12.98 1.755-16.516-3.818l-.106-.17c-10.55-17.243-29.224-27.96-49.753-27.96-19.634 0-37.59 9.796-48.372 25.809l-.324.487c-3.682 5.587-11.18 7.12-16.747 3.425-5.566-3.695-7.094-11.22-3.412-16.807C208.18 384.15 233.83 370 261.862 370z"
            ></path>
            <path
              fill="url(#radialGradient-4)"
              d="M109.5 506c18.502 0 33.5-19.97 33.5-44.604 0-16.423-11.167-42.888-33.5-79.396C87.167 418.508 76 444.973 76 461.396 76 486.03 90.998 506 109.5 506z"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default xDoodle;

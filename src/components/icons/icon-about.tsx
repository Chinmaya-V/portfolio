import React from 'react'

const IconAbout = ({ fill = '#d1d5dc', size = '32px' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0,0,256,256"
      width={size}
      height={size}
      fillRule="nonzero">
      <g
        fill="none"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="none"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
        style={{ mixBlendMode: 'normal' }}>
        <g transform="scale(5.33333,5.33333)">
          <path
            d="M31.4,41c-2.3,1 -4.8,1.5 -7.4,1.5c-10.2,0 -18.5,-8.3 -18.5,-18.5c0,-4.5 1.6,-8.6 4.2,-11.8"
            fill="none"
            stroke={fill}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"></path>
          <path
            d="M16.3,7.2c2.3,-1.1 5,-1.7 7.7,-1.7c10.2,0 18.5,8.3 18.5,18.5c0,4 -1.3,7.7 -3.4,10.7"
            fill="none"
            stroke={fill}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"></path>
          <circle
            cx="24"
            cy="16"
            r="2"
            fill={fill}
            stroke="none"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"></circle>
          <path
            d="M24,22.5v11"
            fill="none"
            stroke={fill}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="miter"></path>
        </g>
      </g>
    </svg>
  )
}

export default IconAbout

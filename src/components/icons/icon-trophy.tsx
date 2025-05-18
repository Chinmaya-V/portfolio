import React from 'react'

const IconTrophy = ({ fill = '#d1d5dc', size = '32px' }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0,0,256,256">
      <g
        fill="none"
        fillRule="nonzero"
        stroke={fill}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
        style={{ mixBlendMode: 'normal' }}>
        <g transform="scale(5.33333,5.33333)">
          <path d="M12.3,9.5h-4.7c-1.1,0 -2,0.9 -2,2v3.5c0,3.9 3.1,7.2 6.9,7.4"></path>
          <path d="M35.7,22.5c3.8,-0.4 6.7,-3.5 6.7,-7.4v-3.5c0,-1.1 -0.9,-2 -2,-2h-4.9"></path>
          <path d="M31.8,6.5h1.7c1.1,0 2,0.9 2,2v12.5c0,6.4 -5.1,11.5 -11.5,11.5v0c-3.4,0 -6.4,-1.5 -8.6,-3.8"></path>
          <path d="M12.6,22.5c-0.1,-0.5 -0.1,-1 -0.1,-1.5v-12.5c0,-1.1 0.9,-2 2,-2h11.6"></path>
          <path d="M20.4,36.3c0,2.9 -2.3,5.2 -5.2,5.2v0"></path>
          <path d="M27.5,32v4.3c0,2.9 2.3,5.2 5.2,5.2v0"></path>
          <path d="M14.8,41.5h18.4"></path>
        </g>
      </g>
    </svg>
  )
}

export default IconTrophy

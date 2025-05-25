import React from "react";

const IconHome = ({ fill = "#d1d5dc", size = "32px" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0,0,256,256"
      width={size}
      height={size}
      fillRule="nonzero"
    >
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
        style={{ mixBlendMode: "normal" }}
      >
        <g transform="scale(5.33333,5.33333)">
          <path d="M13.4,13.8l-3.6,2.9c-1.4,1.1 -2.3,2.9 -2.3,4.7v18.1c0,1.1 0.9,2 2,2h20"></path>
          <path d="M35,41.5h3.5c1.1,0 2,-0.9 2,-2v-18.1c0,-1.8 -0.8,-3.6 -2.3,-4.7l-13.6,-10.7c-0.4,-0.3 -0.9,-0.3 -1.2,0l-4.6,3.6"></path>
          <path d="M18.5,35.7v-8.2c0,-0.6 0.4,-1 1,-1h8.9c0.6,0 1,0.4 1,1v14"></path>
        </g>
      </g>
    </svg>
  );
};

export default IconHome;

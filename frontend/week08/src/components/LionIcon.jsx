import React from "react";

const LionIcon = ({ bgColor = "#FCEBDA", lionColor = "#E67200" }) => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="25" cy="25" r="25" fill={bgColor} />
      <g opacity="0.4">
        <path
          d="M24.9915 5.94061L31.6163 13.5903H18.3666L24.9915 5.94061Z"
          fill={lionColor}
        />
        <path
          d="M8.41577 15.5274L18.353 13.615L11.7282 25.0895L8.41577 15.5274Z"
          fill={lionColor}
        />
        <path
          d="M8.41577 34.7271L18.353 36.6396L11.7282 25.165L8.41577 34.7271Z"
          fill={lionColor}
        />
        <path
          d="M41.5841 15.5274L31.6468 13.615L38.2717 25.0895L41.5841 15.5274Z"
          fill={lionColor}
        />
        <path
          d="M41.5841 34.6897L31.6468 36.6021L38.2717 25.1276L41.5841 34.6897Z"
          fill={lionColor}
        />
        <path
          d="M24.9915 44.339L31.6163 36.6893H18.3666L24.9915 44.339Z"
          fill={lionColor}
        />
        <path
          d="M21.6735 21.9517H17.2652L21.6735 24.7671V21.9517Z"
          fill={lionColor}
        />
        <path
          d="M28.1589 21.9517H32.5672L28.1589 24.7671V21.9517Z"
          fill={lionColor}
        />
        <path
          d="M28.3066 28.5093H21.8238L25.0442 31.0654L28.3066 28.5093Z"
          fill={lionColor}
        />
      </g>
    </svg>
  );
};

export default LionIcon;

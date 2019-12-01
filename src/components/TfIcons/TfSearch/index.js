import React from "react";

const TfSearch = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          y1="0.5"
          x2="1"
          y2="0.5"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#ee395f" />
          <stop offset="1" stopColor="#f69220" />
        </linearGradient>
        <clipPath id="clip-Search">
          <rect width="24" height="24" />
        </clipPath>
      </defs>
      <g id="Search" clipPath="url(#clip-Search)">
        <rect width="24" height="24" fill="#fff" />
        <g id="Grupo_5" data-name="Grupo 5" transform="translate(0 0)">
          <g id="Grupo_4" data-name="Grupo 4" transform="translate(2 3)">
            <path
              id="Caminho_9"
              data-name="Caminho 9"
              d="M133.784,13.009l3.64,3.035.52.434"
              transform="translate(-118.17 -0.369)"
              fill="none"
              stroke="#1a8d5e"
              strokeLinecap="round"
              strokeWidth="3"
            />
            <g id="Grupo_2" data-name="Grupo 2">
              <path
                id="Caminho_8"
                data-name="Caminho 8"
                d="M951.7,535.791a8.66,8.66,0,1,0,8.66,8.661A8.661,8.661,0,0,0,951.7,535.791Zm0,14.187a5.526,5.526,0,1,1,5.526-5.526A5.527,5.527,0,0,1,951.7,549.978Z"
                transform="translate(-943.034 -535.791)"
                fill="url(#linear-gradient)"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default TfSearch;

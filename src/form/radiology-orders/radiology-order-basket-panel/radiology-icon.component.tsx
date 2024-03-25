import React from "react";

interface LabIconProps {
  isTablet: boolean;
}

export default function LabIcon({ isTablet }: LabIconProps) {
  const size = isTablet ? 40 : 24;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_11156_284413)">
        <path d="M24 0H0V24H24V0Z" fill="#E8DAFF" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.6157 15.8091L14 10.8374V6H15V5H9V6H10V10.8374L6.3843 15.8091C5.9398 16.4203 5.87585 17.2292 6.2188 17.9026C6.56175 18.576 7.25358 19 8.0093 19H15.9907C16.7464 19 17.4383 18.576 17.7812 17.9026C18.1242 17.2292 18.0602 16.4203 17.6157 15.8091ZM11 11.1626V6H13V11.1626L14.3364 13H9.6636L11 11.1626ZM15.9907 18H8.0093C7.62971 17.9999 7.28226 17.7868 7.10998 17.4486C6.93771 17.1103 6.96973 16.704 7.19285 16.3969L8.9363 14H15.0637L16.8072 16.3969C17.0303 16.704 17.0623 17.1103 16.89 17.4486C16.7178 17.7868 16.3703 17.9999 15.9907 18Z"
          fill="#6929C4"
        />
      </g>
      <defs>
        <clipPath id="clip0_11156_284413">
          <rect width={size} height={size} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

import React from 'react';
import './PageTitle.scss';
import useIsMobileResolution from '../../utils/hooks/useIsMobile';

interface IPageTitle {
  title: string;
}

const PageTitle = ({ title }: IPageTitle) => {
  const isMobile = useIsMobileResolution({ mobileResolution: 992 });

  return (
    <div className="page-title__container">
      {!isMobile ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="120"
          viewBox="0 0 6 120"
          fill="none"
        >
          <path
            d="M3 0L2.99999 120"
            stroke="url(#paint0_linear_1_56)"
            strokeWidth="5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_56"
              x1="3.5"
              y1="-6"
              x2="3.49999"
              y2="102"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3877EE" />
              <stop offset="1" stopColor="#EF5DA8" />
            </linearGradient>
          </defs>
        </svg>
      ) : null}
      <h1 className="page-title">{title}</h1>
    </div>
  );
};

export default PageTitle;

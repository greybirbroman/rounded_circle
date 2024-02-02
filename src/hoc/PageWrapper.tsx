import React, { ComponentType, ReactNode } from 'react';
import './PageWrapper.scss'

const PageWrapper = (WrappedComponent: ComponentType<any>) => {
  return ({ children, ...props }: { children?: ReactNode }) => {
    return (
      <div className='page-wrapper'>
        <WrappedComponent {...props}>{children}</WrappedComponent>
      </div>
    );
  };
};

export default PageWrapper;

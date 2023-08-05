import React from 'react';

const InitialPadding = ({ children, className }) => {
  return (
    <div
      className={`${className} min-w-full px-[16px] sm:px-[24px] md:px-[32px] lg:px-[48px] xl:px-[64px] 2xl:px-[72px]`}
    >
      {children}
    </div>
  );
};

export default InitialPadding;

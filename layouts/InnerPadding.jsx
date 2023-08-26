import React from 'react';

const InnerPadding = ({ className, children }) => {
  return (
    <div
      className={`min-w-full px-[20px] sm:px-[48px] md:px-[64px] lg:px-[96px] xl:px-[144px] 2xl:px-[200px] ${className}`}
    >
      {children}
    </div>
  );
};

export default InnerPadding;

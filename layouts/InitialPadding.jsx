import React from "react";

const InitialPadding = ({ children, className }) => {
  return (
    <div
      className={`${className} min-w-full px-[16px] md:px-[48px] lg:px-[64px] xl:px-[80px]`}
    >
      {children}
    </div>
  );
};

export default InitialPadding;

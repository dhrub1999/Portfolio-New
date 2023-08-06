import React from 'react';

const Button = ({ className, id, variant, children }) => {
  const differentBtnStyles = (variant) => {
    if (variant === 'secondary') {
      return 'bg-none border-secondary-500 text-secondary-500 hover:border-secondary-300 hover:text-secondary-500 focus:border-secondary-600 focus:text-secondary-600';
    } else if (variant === 'danger') {
      return 'bg-none border-danger-500 text-danger-500 hover:border-danger-300 hover:text-danger-500 focus:border-danger-600 focus:text-danger-600';
    } else {
      return 'bg-accent-500 text-neutral-20 hover:bg-accent-400 focus:bg-accent-600';
    }
  };

  return (
    <button
      variant={variant}
      id={id}
      className={`${className} ${differentBtnStyles(
        variant
      )} block rounded border-2 px-40px py-12px font-lato font-semibold transition-all delay-200 ease-in focus:shadow-lg md:px-48px lg:px-56px lg:py-[14px] lg:text-lg`}
    >
      {children}
    </button>
  );
};

export default Button;

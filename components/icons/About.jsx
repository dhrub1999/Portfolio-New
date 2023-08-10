import React from 'react';

const About = ({ name, className }) => {
  return (
    <svg
      className={`h-20px fill-none transition-all duration-150 ease-in ${className}`}
      name={name}
      viewBox='-1 -1 40 40'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M18.7812 18.5C16.2375 18.5 14.0599 17.5943 12.2484 15.7828C10.437 13.9714 9.53125 11.7938 9.53125 9.25C9.53125 6.70625 10.437 4.52865 12.2484 2.71719C14.0599 0.90573 16.2375 0 18.7812 0C21.325 0 23.5026 0.90573 25.3141 2.71719C27.1255 4.52865 28.0312 6.70625 28.0312 9.25C28.0312 11.7938 27.1255 13.9714 25.3141 15.7828C23.5026 17.5943 21.325 18.5 18.7812 18.5ZM4.90625 37C3.63437 37 2.54596 36.5475 1.641 35.6426C0.7345 34.7361 0.28125 33.6469 0.28125 32.375V30.525C0.28125 29.2146 0.618875 28.0098 1.29413 26.9106C1.96783 25.8129 2.86354 24.975 3.98125 24.3969C6.37083 23.2021 8.79896 22.3056 11.2656 21.7074C13.7323 21.1108 16.2375 20.8125 18.7812 20.8125C21.325 20.8125 23.8302 21.1108 26.2969 21.7074C28.7635 22.3056 31.1917 23.2021 33.5812 24.3969C34.699 24.975 35.5947 25.8129 36.2684 26.9106C36.9436 28.0098 37.2812 29.2146 37.2812 30.525V32.375C37.2812 33.6469 36.8288 34.7361 35.9238 35.6426C35.0173 36.5475 33.9281 37 32.6562 37H4.90625Z' />
    </svg>
  );
};

export { About };

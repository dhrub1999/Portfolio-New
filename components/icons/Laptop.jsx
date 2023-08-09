import React from 'react';

const Laptop = ({ name }) => {
  return (
    <svg
      className='h-20px fill-none stroke-neutral-600 stroke-2'
      name={name}
      viewBox='0 0 39 33'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M17.3529 3.70581H7.97059C7.29195 3.70581 6.6411 3.9754 6.16123 4.45527C5.68135 4.93514 5.41176 5.58599 5.41176 6.26463V24.1764H32.7059V14.794'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2 24.1765H36.1176V25.8824C36.1176 27.2397 35.5785 28.5414 34.6187 29.5011C33.659 30.4609 32.3573 31 31 31H7.11765C5.76036 31 4.45867 30.4609 3.49892 29.5011C2.53918 28.5414 2 27.2397 2 25.8824V24.1765Z'
        strokeLinejoin='round'
      />
      <path
        d='M26.7353 2L23.3235 5.41176L26.7353 8.82353M31.8529 2L35.2647 5.41176L31.8529 8.82353'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export { Laptop };

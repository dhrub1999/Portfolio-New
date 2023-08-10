import React from 'react';
import Link from 'next/link';

// const Button = ({ className, id, variant, children }) => {
//   const differentBtnStyles = (variant) => {
//     if (variant === 'secondary') {
//       return 'bg-none border-neutral-500 text-neutral-500 hover:border-neutral-300 hover:text-neutral-500 focus:border-neutral-600 focus:text-secondary-600';
//     } else if (variant === 'danger') {
//       return 'bg-none border-danger-500 text-danger-500 hover:border-danger-300 hover:text-danger-500 focus:border-danger-600 focus:text-danger-600';
//     } else {
//       return 'bg-accent-500 text-neutral-20 hover:bg-accent-400 focus:bg-accent-600';
//     }
//   };

//   return (
//     <button
//       variant={variant}
//       id={id}
//       className={`${className} ${differentBtnStyles(
//         variant
//       )} block rounded border-2 px-40px py-12px font-lato font-semibold transition-all delay-200 ease-in focus:shadow-lg md:px-48px lg:px-56px lg:py-[14px] lg:text-lg`}
//     >
//       {children}
//     </button>
//   );
// };

const Button = ({ variant, children, href }) => {
  return (
    <Link href={href}>
      <button
        className={`btn relative ${
          variant === 'primary' ? 'btn-primary' : 'btn-secondary'
        } rounded font-lexendDeca text-base font-500 capitalize text-base-100 lg:btn-lg ${
          variant === 'secondary' ? 'btn-outline' : ''
        }`}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;

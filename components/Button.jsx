import React from 'react';
import Link from 'next/link';

const Button = ({ variant, children, href, onclick }) => {
  return (
    <Link href={href}>
      <button
        className={`btn relative ${
          variant === 'primary' ? 'btn-primary' : 'btn-secondary'
        } rounded font-lexendDeca text-base font-500 normal-case text-base-100 lg:btn-lg ${
          variant === 'secondary' ? 'btn-outline' : ''
        }`}
        onClick={onclick}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;

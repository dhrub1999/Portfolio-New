import React from 'react';
import Link from 'next/link';
import { motion as m } from 'framer-motion';

const Button = ({ variant, children, href, onclick, className, target }) => {
  return (
    <Link href={href} target={target}>
      <m.button
        className={`btn relative ${
          variant === 'primary'
            ? 'btn-primary 2xl:btn-lg hover:text-slate-800'
            : 'btn-secondary 2xl:btn-lg hover:text-slate-200'
        } rounded font-lexendDeca text-base font-500 normal-case text-base-100 ${
          variant === 'secondary' ? 'btn-outline' : ''
        } ${className}`}
        onClick={onclick}
        initial={{ opacity: 0, translateY: '15px' }}
        whileInView={{ opacity: 1, translateY: 0 }}
        exit={{ opacity: 0, translateY: '15px' }}
        transition={{ duration: 0.2, ease: 'easeIn' }}
      >
        {children}
      </m.button>
    </Link>
  );
};

export default Button;

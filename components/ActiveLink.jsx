import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const ActiveLink = ({ children, href }) => {
  const pathName = usePathname();
  return (
    <Link
      href={href === 'home' ? '/' : `${href}`}
      className={
        (pathName === '/' && href === 'home') || pathName === `/${href}`
          ? 'block p-8px rounded-full  bg-primary'
          : 'rounded-full  bg-slate-500'
      }
    >
      {children}
    </Link>
  );
};

export default ActiveLink;

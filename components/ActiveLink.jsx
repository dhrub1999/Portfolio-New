import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const ActiveLink = ({ children, href }) => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <Link
      href={href === 'home' ? '/' : `${href}`}
      className={
        (pathName === '/' && href === 'home') || pathName === `/${href}`
          ? 'select-none rounded bg-neutral-40 px-[24px] py-[8px] text-neutral-700 shadow-sm transition-all delay-200 ease-in'
          : 'select-none text-neutral-200 transition-all delay-300 ease-in hover:text-neutral-400 focus:text-neutral-500'
      }
    >
      {children}
    </Link>
  );
};

export default ActiveLink;

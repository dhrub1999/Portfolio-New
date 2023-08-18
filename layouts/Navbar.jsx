'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Logo from '@/components/icons/Logo';
import { Icon } from '@/components/icons';
import InitialPadding from './InitialPadding';
import Button from '@/components/Button';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const clickHandler = () => {
    setClicked(!clicked);
  };
  const pathName = usePathname();

  return (
    <div className='sticky top-0 z-[40] flex w-full items-center justify-between bg-slate-100 py-8px'>
      <InitialPadding className='relative flex items-center justify-between'>
        <div className='logo-container'>
          <Logo className='h-28px w-auto fill-gray-600 transition-all delay-200 ease-in hover:fill-gray-500 focus:fill-gray-700 md:h-32px lg:h-40px' />
        </div>
        <div className='flex items-center gap-12px'>
          <div className='theme-logo'>
            <label className='swap swap-rotate'>
              {/* this hidden checkbox controls the state */}
              <input type='checkbox' />

              {/* sun icon */}
              <svg
                className='swap-on h-28px w-auto fill-primary md:w-32px lg:h-40px'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <path d='M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z' />
              </svg>

              {/* moon icon */}
              <svg
                className='swap-off h-28px w-auto fill-primary md:w-32px lg:h-40px'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <path d='M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z' />
              </svg>
            </label>
          </div>

          <Button href='/contact' onclick={clickHandler} variant={'secondary'}>
            Contact me
          </Button>
        </div>
      </InitialPadding>
      <nav className='fixed bottom-12px z-10 w-full md:block'>
        <InitialPadding>
          <ul className='backdrop-blur-8px flex justify-between  rounded-full bg-transparent-light px-28px py-12px backdrop-blur-sm xs:mx-24px sm:mx-64px '>
            <li>
              <Link href={'/'}>
                <Icon
                  name='home'
                  className={
                    pathName === '/'
                      ? 'fill-secondary stroke-0'
                      : 'stroke-neutral-600 stroke-2'
                  }
                />
                <p className='hidden md:block'>Home</p>
              </Link>
            </li>
            <li>
              <Link href={'/projects'}>
                <Icon
                  name='laptop'
                  className={
                    pathName === '/projects'
                      ? 'fill-secondary stroke-0'
                      : 'stroke-neutral-600 stroke-2'
                  }
                />
                <p className='hidden md:block'>Projects</p>
              </Link>
            </li>
            <li>
              <Link href={'/about'}>
                <Icon
                  name='about'
                  className={
                    pathName === '/about'
                      ? 'fill-secondary stroke-0'
                      : 'stroke-neutral-600 stroke-2'
                  }
                />
                <p className='hidden md:block'>About</p>
              </Link>
            </li>
            <li>
              <Link href={'/services'}>
                <Icon
                  name='service'
                  className={
                    pathName === '/services'
                      ? 'stroke-secondary stroke-2'
                      : 'stroke-neutral-600 stroke-1'
                  }
                />
                <p className='hidden md:block'>About</p>
              </Link>
            </li>
          </ul>
        </InitialPadding>
      </nav>
    </div>
  );
};

export default Navbar;

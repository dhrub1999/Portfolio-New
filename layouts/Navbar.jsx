'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

import Logo from '@/components/icons/Logo';
import { Icon } from '@/components/icons';
import InitialPadding from './InitialPadding';
import Button from '@/components/Button';
import { navUl, navLi } from '@/helper/framerAnimations';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [theme, setTheme] = useState('lofi');
  const clickHandler = () => {
    setClicked(!clicked);
  };
  const toggleTheme = () => {
    setTheme(theme === 'lofi' ? 'dracula' : 'lofi');
  };
  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
  });
  const pathName = usePathname();

  return (
    <div className='sticky top-0 z-[40] flex w-full items-center justify-between border-b-2 bg-slate-50 py-8px shadow-sm md:z-20  md:flex-col md:bg-slate-50 md:py-12px md:shadow-none'>
      <div className='relative w-full'>
        <InitialPadding>
          <div className='relative flex w-full items-center justify-between'>
            <div className='logo-container'>
              <Logo className='h-28px w-auto fill-gray-800 transition-all delay-200 ease-in hover:fill-primary focus:fill-gray-700 md:h-32px 2xl:h-32px' />
            </div>

            <div className='flex items-center gap-60px'>
              <nav className='fixed bottom-12px left-0 z-10 flex w-full justify-center md:relative md:bottom-0 md:block md:w-auto'>
                <motion.ul
                  className='flex justify-center gap-52px rounded-full bg-slate-700 px-12px py-12px backdrop-blur-sm sm:gap-80px sm:px-40px md:gap-32px md:bg-transparent md:px-0 md:py-0 md:backdrop-blur-0 lg:gap-48px xl:gap-60px'
                  variants={navUl}
                  initial='hidden'
                  whileInView='show'
                >
                  <motion.li variants={navLi}>
                    <Link href={'/'} prefetch={false}>
                      <Icon
                        name='home'
                        className={
                          pathName === '/'
                            ? 'fill-primary stroke-0'
                            : 'stroke-neutral-300 stroke-2'
                        }
                      />
                      <p
                        className={`hidden md:block ${
                          pathName === '/'
                            ? 'text-primary underline underline-offset-2'
                            : 'text-neutral-600'
                        }`}
                      >
                        Home
                      </p>
                    </Link>
                  </motion.li>
                  <motion.li variants={navLi}>
                    <Link href={'/projects'} prefetch={false}>
                      <Icon
                        name='laptop'
                        className={
                          pathName === '/projects'
                            ? 'fill-primary stroke-0'
                            : 'stroke-neutral-300 stroke-2'
                        }
                      />
                      <p
                        className={`hidden md:block ${
                          pathName === '/projects'
                            ? 'text-primary underline underline-offset-2'
                            : 'text-neutral-600'
                        }`}
                      >
                        Projects
                      </p>
                    </Link>
                  </motion.li>
                  <motion.li variants={navLi}>
                    <Link href={'/about'} prefetch={false}>
                      <Icon
                        name='about'
                        className={
                          pathName === '/about'
                            ? 'fill-primary stroke-0'
                            : 'stroke-neutral-300 stroke-[2]'
                        }
                      />
                      <p
                        className={`hidden md:block ${
                          pathName === '/about'
                            ? 'text-primary underline underline-offset-2'
                            : 'text-neutral-600'
                        }`}
                      >
                        About
                      </p>
                    </Link>
                  </motion.li>
                  <motion.li variants={navLi}>
                    <Link href={'/services'}>
                      <Icon
                        name='service'
                        className={
                          pathName === '/services'
                            ? 'stroke-primary stroke-[4]'
                            : 'stroke-neutral-300 stroke-[4]'
                        }
                      />
                      <p
                        className={`hidden md:block ${
                          pathName === '/services'
                            ? 'text-primary underline underline-offset-2'
                            : 'text-neutral-600'
                        }`}
                      >
                        Services
                      </p>
                    </Link>
                  </motion.li>
                </motion.ul>
              </nav>

              <div className='md:40px flex items-center gap-12px sm:gap-24px'>
                <div className='theme-logo'>
                  <label className='swap swap-rotate'>
                    <input type='checkbox' onClick={toggleTheme} />

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

                <Button
                  href='/contact'
                  onclick={clickHandler}
                  variant={'secondary'}
                  className={'lg:btn-md'}
                >
                  Contact me
                </Button>
              </div>
            </div>
          </div>
        </InitialPadding>
      </div>
    </div>
  );
};

export default Navbar;

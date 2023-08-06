'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '@/components/logo/Logo';
import InitialPadding from './InitialPadding';
import { navLinks } from '@/helper/content';
import ActiveLink from '@/components/ActiveLink';
import Button from '@/components/Button';
import useViewportWidth from '@/hooks/useViewportWidth';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [activeLink, setActiveLink] = useState(false);
  const viewportWidth = useViewportWidth();

  const handleNavLink = () => {
    if (viewportWidth < 768) {
      setClicked(false);
    }
  };

  const desktopHandleClick = () => {
    setClicked(!clicked);
  };

  const clickHandler = () => {
    setClicked(!clicked);
  };
  useEffect(() => {
    // Close mobile menu when the viewport width changes to desktop view
    if (viewportWidth >= 768) {
      setClicked(false);
    }
  }, [viewportWidth]);

  return (
    <header className='py-[12px]'>
      <InitialPadding>
        <div className='flex items-center justify-between'>
          <div className='circle one'></div>
          <div className='circle two'></div>
          <div className='circle three'></div>
          <div className='circle four'></div>
          <div className='logo-container'>
            <Logo className='h-auto w-[32px] fill-accent-500 delay-300 ease-in hover:fill-accent-400 active:fill-accent-600 md:w-[40px] lg:w-[48px]' />
          </div>
          <div className={viewportWidth >= 768 ? 'hidden' : ''}>
            <nav
              className={`bg-[rgba(255, 255, 255, 0.1)] absolute right-0 top-[0] grid h-[100vh] max-h-[750px] min-h-[600px] min-w-[100%] max-w-[380px] translate-x-0 items-center justify-end p-[16px] backdrop-blur-xl transition-transform delay-200 ease-in-out dark:bg-neutral-600 md:px-[48px] lg:px-[64px] xl:px-[80px] ${
                clicked ? 'translate-x-0' : 'translate-x-[10000px]'
              }`}
            >
              <ul className='my-40px flex flex-col items-end justify-center gap-12'>
                {navLinks.map((link, index) => (
                  <li
                    onClick={handleNavLink}
                    key={index}
                    className='list-item font-kalam text-4xl font-bold tracking-widest transition-all delay-300 ease-in'
                  >
                    <ActiveLink href={link.toLocaleLowerCase()}>
                      {link}
                    </ActiveLink>
                  </li>
                ))}
              </ul>

              <div className='btn-container justify-self-end'>
                <Button variant={'secondary'}>
                  <Link href={'/contact'}>Contact</Link>
                </Button>
              </div>
            </nav>

            <div
              className='hamburger group relative flex cursor-pointer flex-col gap-4px p-8px'
              onClick={clickHandler}
            >
              <span
                className={`block h-[2px] self-end rounded-full transition-all delay-300 ease-in ${
                  clicked
                    ? 'w-24px translate-x-1 translate-y-1 rotate-45 bg-primary-500'
                    : 'w-16px bg-neutral-600 '
                }`}
              ></span>
              <span
                className={`block h-[2px] w-[24px] rounded-full transition-all delay-300 ease-in ${
                  clicked
                    ? '-translate-y-[2px] translate-x-1 -rotate-45 bg-accent-500'
                    : 'bg-neutral-600'
                }`}
              ></span>
            </div>
          </div>

          {/* Desktop Nav */}

          <div className={viewportWidth < 768 ? 'hidden' : ''}>
            <nav>
              <ul className='flex items-end justify-center gap-12'>
                {navLinks.map((link, index) => (
                  <li
                    onClick={desktopHandleClick}
                    key={index}
                    className={`list-item font-lato text-base text-neutral-400 transition-all delay-300 ease-in hover:text-neutral-600 ${
                      handleNavLink ? '' : 'text-primary-500'
                    }`}
                  >
                    <Link
                      href={
                        link.toLocaleLowerCase() === 'home'
                          ? '/'
                          : link.toLocaleLowerCase()
                      }
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </InitialPadding>
    </header>
  );
};

export default Navbar;

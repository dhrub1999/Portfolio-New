'use client';
import React from 'react';
import InitialPadding from './InitialPadding';
import Logo from '@/components/icons/Logo';
import Link from 'next/link';
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='relative z-50 bg-slate-200 py-16px'>
      <InitialPadding className='flex flex-col items-center justify-center'>
        <div className='logo-container mb-16px flex items-center gap-8px font-lexendDeca'>
          <Logo className='w-32px fill-secondary transition-all duration-200 ease-in hover:fill-secondary-content focus:fill-secondary-focus' />
          <p className='text-lg font-600 leading-none text-slate-600'>
            Tamal Biswas
          </p>
        </div>
        <div className='social-links-container'>
          <p className='mb-12px font-lexendDeca text-sm leading-none text-slate-400'>
            Connect with me on
          </p>
          <div className='social-links flex items-center justify-center gap-24px'>
            <Link
              href='https://github.com/dhrub1999'
              className='text-3xl text-slate-600 transition-all duration-200 ease-in hover:text-slate-500  focus:text-slate-800'
            >
              <FaGithubSquare />
            </Link>
            <Link
              href='https://www.linkedin.com/in/tamal-biswas-813395202/'
              className='text-3xl text-slate-600 transition-all duration-200 ease-in hover:text-slate-500  focus:text-slate-800'
            >
              <FaLinkedin />
            </Link>
            <Link
              href='https://www.instagram.com/___tamal__._/'
              className='text-3xl text-slate-600 transition-all duration-200 ease-in hover:text-slate-500 focus:text-slate-800'
            >
              <FaInstagramSquare />
            </Link>
          </div>
        </div>
      </InitialPadding>
      <p className='mt-24px text-center font-lexendDeca text-xs text-slate-600'>
        Designed & Developed by{' '}
        <Link
          href='mailto:contact.tamabiswas@gmail.com'
          className='transition-colors duration-200 ease-in hover:text-secondary'
        >
          Tamal Biswas
        </Link>
      </p>
    </footer>
  );
};

export default Footer;

'use client';
import React from 'react';
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';
import Link from 'next/link';
import { motion as m } from 'framer-motion';

import InitialPadding from './InitialPadding';
import Logo from '@/components/icons/Logo';
import {
  iconVariants,
  linkVariants,
  staggerVariants,
} from '@/helper/framerAnimations';

const Footer = () => {
  return (
    <footer className='relative z-50 bg-slate-900 py-16px md:py-24px'>
      <InitialPadding className='flex flex-col items-center justify-center md:flex-row md:justify-between'>
        <div className='mb-16px flex items-center gap-8px font-lexendDeca md:items-end md:gap-12px'>
          <div>
            <Logo className='w-32px fill-primary transition-all duration-200 ease-in hover:fill-secondary-focus focus:fill-secondary-focus md:w-40px' />
          </div>
          <p className='font-kalam text-lg font-600 text-slate-400 md:text-lg-xl lg:text-md-2xl'>
            Tamal Biswas
          </p>
        </div>
        <div className='social-links-container h-full md:flex md:items-center md:gap-24px'>
          <p className='mb-12px font-lexendDeca text-sm text-slate-400 md:mb-0 md:text-base'>
            Find me on
          </p>
          <m.div
            className='social-links flex items-center justify-center gap-24px'
            variants={staggerVariants}
            initial='hidden'
            whileInView='show'
          >
            <m.div variants={iconVariants}>
              <Link
                href='https://github.com/dhrub1999'
                className='text-3xl text-slate-400 transition-all duration-200 ease-in hover:text-slate-600  focus:text-slate-800'
              >
                <FaGithubSquare />
              </Link>
            </m.div>
            <m.div variants={iconVariants}>
              <Link
                href='https://www.linkedin.com/in/tamal-biswas-813395202/'
                className='text-3xl text-slate-400 transition-all duration-200 ease-in hover:text-slate-600  focus:text-slate-800'
              >
                <FaLinkedin />
              </Link>
            </m.div>
            <m.div variants={iconVariants}>
              <Link
                href='https://www.instagracom/___tamal__._/'
                className='text-3xl text-slate-400 transition-all duration-200 ease-in hover:text-slate-600 focus:text-slate-800'
              >
                <FaInstagramSquare />
              </Link>
            </m.div>
          </m.div>
        </div>
      </InitialPadding>
      <div className='mt-24px text-center font-lexendDeca text-xs md:mt-32px md:text-sm lg:mt-40px'>
        <p className='mt-24px text-slate-400 md:mt-12px'>
          Designed & Developed by{' '}
          <Link
            href='mailto:contact.tamabiswas@gmail.com'
            className='font-600 transition-colors duration-200 ease-in hover:text-secondary'
          >
            Tamal Biswas
          </Link>
          .
        </p>
        <p className='text-slate-500'>@2023 | All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

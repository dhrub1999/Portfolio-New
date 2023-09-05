'use client';
import LottiePlayer from '@/components/LottiePlayer';
import React from 'react';
import InnerPadding from '@/layouts/InnerPadding';
import Link from 'next/link';

const PageNotFound = () => {
  return (
    <InnerPadding>
      <div className='large-padding-block-container relative grid min-h-[90vh] place-content-center place-items-center gap-12px md:min-h-[85vh]'>
        <div className='mx-auto max-w-[400px] lg:max-w-[550px]'>
          <LottiePlayer
            src={'/lottie-animations/404.json'}
            className='h-auto'
          />
        </div>
        <div className='text-center'>
          <p className='font-lexendDeca text-lg font-500 text-slate-700'>
            You didn't break the internet, but I can't find what you are looking
            for.
          </p>
          <p className='mt-8px font-lexendDeca text-sm font-400 text-slate-500 md:mt-12px md:text-base xl:mt-16px'>
            Let's go back to where we've started!
          </p>
        </div>
        <button className='btn btn-primary btn-md mt-24px font-lexendDeca text-sm font-600 normal-case text-slate-100 xl:btn-lg md:mt-28px md:text-base'>
          <Link href='/'>Go back</Link>
        </button>
      </div>
    </InnerPadding>
  );
};

export default PageNotFound;

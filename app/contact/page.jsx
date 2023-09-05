'use client';
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

import LottiePlayer from '@/components/LottiePlayer';
import PageWrapper from '@/components/PageWrapper';
import InnerPadding from '@/layouts/InnerPadding';
import Form from './Form';

const Contact = () => {
  return (
    <PageWrapper>
      <InnerPadding className={'py-32px lg:py-48px'}>
        <div className='md mb-48px gap-24px md:mb-0 md:grid md:grid-cols-2 md:place-items-start md:gap-24px'>
          <div className='flex flex-col-reverse items-center sm:gap-32px md:w-full'>
            <div className='-mt-60px lg:-mt-[120px]'>
              <h2 className='text-center font-nunito text-sm-5xl font-700 text-slate-700 md:text-left  md:text-md-5xl lg:text-lg-5xl'>
                Get in touch
              </h2>
              <p className='text-center font-lexendDeca text-sm tracking-wide text-slate-500 md:text-left  md:text-base'>
                Project enquiry. Job offer, or even an Appreciation.
              </p>
            </div>
            <div className='-mt-40px w-full max-w-[400px] md:self-start lg:max-w-[550px]'>
              <LottiePlayer src='/lottie-animations/contact-hero.json' />
            </div>
          </div>
          <Form />
        </div>
      </InnerPadding>
    </PageWrapper>
  );
};

export default Contact;

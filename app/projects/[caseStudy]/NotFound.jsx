'use client';
import Button from '@/components/Button';
import PageWrapper from '@/components/PageWrapper';
import InnerPadding from '@/layouts/InnerPadding';
import React from 'react';

const NotFound = () => {
  return (
    <PageWrapper>
      <InnerPadding className='grid h-[90vh] place-items-center'>
        <div className='text-center'>
          <h1 className='font-nunito text-sm-5xl font-900 text-slate-800 md:text-md-5xl'>
            Project not found!
          </h1>
          <p className='mt-20px font-lexendDeca font-400 text-slate-600'>
            Let&rsquo;s go back.
          </p>
          <Button href='/projects' variant={'primary'} className='mt-40px'>
            Projects
          </Button>
        </div>
      </InnerPadding>
    </PageWrapper>
  );
};

export default NotFound;
